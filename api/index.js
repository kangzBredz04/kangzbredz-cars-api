import express from "express";
import "dotenv/config";
import cors from "cors";

import CarRoute from "./routes/car-route.js";

const app = express();

app.use(cors());

app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.use("/car", CarRoute);

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
