import express from "express";
import { addSpec } from "../services/spec-service.js";

const specRouter = express.Router();

specRouter.post("/spec/add", async (req, res) => {
  console.log("spec POST request", req.body);
  const property = Object.keys(req.body);
  const values = Object.values(req.body);
  const result = await addSpec(property, values);
  res.status(200).send(result);
});

export default specRouter;
