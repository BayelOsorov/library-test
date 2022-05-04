import axios from "axios";
import * as types from "./actionsType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((e) => console.log(e));
  };
};
