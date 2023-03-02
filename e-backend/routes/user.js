import express from "express";

const Router = express.Router();

Router.get("users", (req, res) => {
  console.log("GET USERS huselt orj irlee");
  res.status(200).send({ message: "backend is still in develepment" });
});
