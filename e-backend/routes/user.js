import express from "express";

import { addUser, getUser, deleteUser } from "../services/user-service.js";

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
  console.log("GET USERS huselt orj irlee");
  const { query } = req;
  const result = await getUser(query.limit || 10);
  res.status(200).send(result);
});

userRouter.post("/user/add", async (req, res) => {
  console.log("user POST huselt irlee", req.body);
  const properties = Object.keys(req.body);
  const values = Object.values(req.body);
  const response = await addUser(properties, values);
  res.status(200).send(response);
});

userRouter.delete("/user/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log("user Delete huselt irlee ID:", id);
  const result = await deleteUser(id);
  res.status(200).send(result);
});

export default userRouter;
