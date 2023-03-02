import express from "express";

const Router = express.Router();

let products = [{ id: 1, name: "iphone15" }];

Router.get("/products", (req, res) => {
  console.log("get products huselt irlee");
  res
    .status(200)
    .send({ message: " backend in development, thank you for your patience" });
});

Router.post("/product", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(200).send(products);
});

export default Router;
