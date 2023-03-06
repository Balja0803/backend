import express from "express";
import { addBrand } from "../services/brand-service.js";

const brandRouter = express.Router();

brandRouter.post("/brand/add", async (req, res) => {
  console.log("brand POST request", req.body);
  const property = Object.keys(req.body);
  const values = Object.values(req.body);
  const result = await addBrand(property, values);
  res.status(200).send(result);
});

export default brandRouter;
