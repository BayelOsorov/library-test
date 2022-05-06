export const instance = axios.create({
  baseURL: ` ${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance
  .get("/getUsers")
  .then((resp) => {
    console.log("resp", resp);
    dispatch(getUsers(resp.data));
  })
  .catch((e) => console.log(e));

instance
  .delete(`/getUsers/${id}`)
  .then((resp) => {
    console.log("resp", resp);
    dispatch(userDeleted());
    dispatch(loadUsers());
  })
  .catch((e) => console.log(e));

instance
  .post("/getUsers", user)
  .then((resp) => {
    console.log("resp", resp);
    dispatch(userAdded());
    dispatch(loadUsers());
  })
  .catch((e) => console.log(e));

instance
  .get(`/getUsers/${id}`)
  .then((resp) => {
    console.log("resp", resp);
    dispatch(getUser(resp.data));
  })
  .catch((e) => console.log(e));

instance
  .put(`/getUsers/${id}`)
  .then((resp) => {
    console.log("resp", resp);
    dispatch(userUpdated());
  })
  .catch((e) => console.log(e));
