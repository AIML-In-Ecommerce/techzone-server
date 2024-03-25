import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { errorHandler, notFound } from "../shared/helper/errorHandler.js";
import db from "./configs/db.js";

import cartRoute from "./cart.route.js";
const app = express();

dotenv.config();
const port = process.env.CART_PORT;
db();

const initializeExpress = (app) => {
  //app.use(express.static(path.join(__dirname, "public")));
  //app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  //app.use(morgan("combined", { stream: logger.stream }));
};

initializeExpress(app);

app.use(cartRoute);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Your app is running at http://localhost:${port}`);
});
