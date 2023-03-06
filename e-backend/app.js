import express from "express";
import prodRouter from "./routes/product.js";
import cors from "cors";
import bodyParser from "body-parser";
import empRouter from "./routes/employees.js";
import userRouter from "./routes/user.js";
import brandRouter from "./routes/brand.js";
import categoryRouter from "./routes/category.js";
import specRouter from "./routes/spec.js";

const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(empRouter);
app.use(userRouter);
app.use(prodRouter);
app.use(brandRouter);
app.use(specRouter);
app.use(categoryRouter);
app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
console.log("test");
