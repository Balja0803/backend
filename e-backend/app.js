import express from "express";
import prodRouter from "./routes/product.js";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./routes/product.js";
import empRouter from "./routes/employees.js";

const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(express.json());
app.use(empRouter);

app.use(Router);
app.use(prodRouter);
app.use(cors());
app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
console.log("test");
