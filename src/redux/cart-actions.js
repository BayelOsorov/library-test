import axios from "axios";
import $axios from "./../axiosConfig";
import jwt_decode from "jwt-decode";
import { CalcSubPrice, calcTotalPrice } from "../utils/calcPrice";
import {
  ADD_AND_DELETE_CART,
  CLEAR_COUNT_OF_CART,
  GET_CART,
  USER_GET_COUNT,
  USER_GET_DETAIL,
  USER_GET_PRODUCT,
} from "./actionsType";
const API = "http://localhost:4000/user";

export const getProducts = (page = "1") => {
  return async (dispatch) => {
    try {
      let filter = window.location.search;
      let filter1 = window.location.search;

      if (filter) filter += `&page=${page}`;
      else filter += `?page=${page}`;

      const { data } = await $axios(`user/${filter}`);
      if (filter1) filter1 += "&limit=10000";
      else filter1 += "?limit=10000";

      const response = await $axios(`user/${filter1}`);
      dispatch({
        type: USER_GET_COUNT,
        payload: response.data.rows.length,
      });
      let action = {
        type: USER_GET_PRODUCT,
        payload: data.rows,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };
};
export const getDetail = (id) => {
  return async (dispatch) => {
    const { data } = await $axios("/user/" + id);
    dispatch({
      type: USER_GET_DETAIL,
      payload: data,
    });
  };
};

// ! cart
export const addAndDeleteProductInCart = (product1) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      user: [],
      totalPrice: 0,
    };
  }
  let product = {
    product1: product1,
    count: 1,
    subPrice: 0,
  };
  product.subPrice = CalcSubPrice(product);
  let checkArr = cart.user.filter((item) => {
    return item.product1.id === product1.id;
  });
  if (checkArr.length === 0) {
    cart.user.push(product);
  } else {
    cart.user = cart.user.filter((item) => {
      return item.product1.id !== product1.id;
    });
  }
  cart.totalPrice = calcTotalPrice(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  return {
    type: ADD_AND_DELETE_CART,
    payload: cart.user.length,
  };
};
export const checkProductInCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      user: [],
      totalPrice: 0,
    };
  }
  let checkArr = cart.user.filter((item) => {
    return item.product1.id === id;
  });
  if (checkArr.length === 0) {
    return false;
  } else {
    return true;
  }
};
export const getCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return {
    type: GET_CART,
    payload: cart,
  };
};
export const changeCountProduct = (count, id) => {
  if (count < 1) {
    return;
  }
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      user: [],
      totalPrice: 0,
    };
  }
  cart.user = cart.user.map((item) => {
    if (item.product1.id === id) {
      item.count = count;
      item.subPrice = CalcSubPrice(item);
    }
    return item;
  });
  cart.totalPrice = calcTotalPrice(cart);
  localStorage.setItem("cart", JSON.stringify(cart));

  getCart();
};
// Clear count of cart
export const clearCountOfCart = () => {
  return {
    type: CLEAR_COUNT_OF_CART,
    payload: null,
  };
};
