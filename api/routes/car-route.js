import express from "express";
import { getAllCars } from "../controllers/car-controlller.js";

const router = express.Router();

router.get("/get-all", getAllCars);

export default router;
