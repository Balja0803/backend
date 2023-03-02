import express from "express";
import { getEmployees } from "../services/em-service.js";

const empRouter = express.Router();

empRouter.get("/employees", async (req, res) => {
  const { query } = req;
  const result = await getEmployees(query.limit || 10);
  res.status(200).send(result);
});

export default empRouter;
