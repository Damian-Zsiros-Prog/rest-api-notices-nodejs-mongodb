import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import noticesRouter from "./routes/notices.routes";

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 4500);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(noticesRouter);

app.listen(app.get("port"), () => {
  console.log("Server work on port", app.get("port"));
});
