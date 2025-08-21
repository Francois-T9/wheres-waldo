import express from "express";
const router = express.Router();
import getCharacters from "../controllers/charactersController";

router.get("/", getCharacters);
export default router;
