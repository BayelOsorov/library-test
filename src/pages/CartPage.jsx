import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "redux/actions";
import { getCart } from "redux/cart-actions";
// import { clientContext } from "../contexts/ClientContext";

const CartPage = ({ products }) => {
  let dispatch = useDispatch();
  const { users, cart, productsCountInCart } = useSelector(
    (state) => state.data
  );

  console.log("cart", cart);
  console.log("users", users);
  useEffect(() => {
    // dispatch(loadUsers());
    getCart();
  }, []);
  return (
    <div>
      <h2>Корзина</h2>

      {cart ? (
        cart.user.length > 0 ? (
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell align="right">Фото</TableCell>
                    <TableCell align="right">Кол-во</TableCell>
                    <TableCell align="right">Сумма</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.user.map((item) => (
                    <TableRow
                      key={item.user.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.user.name}
                      </TableCell>
                      <TableCell align="right">
                        <img width="50px" src={item.user.image} alt="" />
                      </TableCell>

                      <TableCell align="right">
                        <input
                          onChange={(e) =>
                            productsCountInCart(e.target.value, item.user.id)
                          }
                          type="number"
                          value={item.count}
                        />
                      </TableCell>

                      <TableCell align="right">{item.subPrice} com </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} align="right">
                      Total:
                    </TableCell>
                    <TableCell colSpan={1} align="right">
                      {cart.totalPrice} com
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <h2>У вас нет товаров</h2>
        )
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default CartPage;
