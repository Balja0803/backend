import express from "express";
import { addCategory } from "../services/category-service.js";

const categoryRouter = express.Router();

categoryRouter.post("/categories/add", async (req, res) => {
  console.log("Category POST request", req.body);
  const property = Object.keys(req.body);
  const values = Object.values(req.body);
  const result = await addCategory(property, values);
  res.status(200).send(result);
});

export default categoryRouter;
