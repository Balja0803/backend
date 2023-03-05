import express from "express";
import {
  addProduct,
  getProduct,
  deleteProduct,
} from "../services/product-service.js";

const prodRouter = express.Router();

prodRouter.get("/products", async (req, res) => {
  console.log("get products huselt irlee");
  const { query } = req;
  const result = await getProduct(query.limit || 10);
  res.status(200).send(result);
});

prodRouter.post("/product/add", async (req, res) => {
  console.log("product POST huselt irlee", req.body);
  const property = Object.keys(req.body);
  const values = Object.values(req.body);
  const response = await addProduct(property, values);

  res.status(200).send(response);
});

prodRouter.delete("/product/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Product delete huselt irlee. ID:", id);
  const result = await deleteProduct(id);
  res.status(200).send(result);
});

export default prodRouter;
