import express from "express";
import { addProduct } from "../services/product-service.js";

const prodRouter = express.Router();

let products = [{ id: 1, name: "iphone15" }];

prodRouter.get("/products", (req, res) => {
  console.log("get products huselt irlee");
  res
    .status(200)
    .send({ message: " backend in development, thank you for your patience" });
});

prodRouter.post("/product/add", async (req, res) => {
  console.log(req.body);
  const property = Object.keys(req.body);
  const values = Object.values(req.body);
  await addProduct(property, values);

  res.status(200).send(products);
});

export default prodRouter;
