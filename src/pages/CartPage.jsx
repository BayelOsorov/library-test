import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { clientContext } from "../contexts/ClientContext";

const CartPage = () => {
  let dispatch = useDispatch();
  const { users, cart, productsCountInCart } = useSelector(
    (state) => state.data
  );

  // const { getCart, cart, changeCountPhone } = useContext(clientContext);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <div>
      <h2>Корзина</h2>
      {cart ? (
        cart.phones.length > 0 ? (
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
                  {cart.phones.map((item) => (
                    <TableRow
                      key={item.phone.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.phone.name}
                      </TableCell>
                      <TableCell align="right">
                        <img width="50px" src={item.phone.image} alt="" />
                      </TableCell>

                      <TableCell align="right">
                        <input
                          onChange={(e) =>
                            changeCountPhone(e.target.value, item.phone.id)
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
