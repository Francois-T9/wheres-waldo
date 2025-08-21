import express from "express";
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("/", playerController.getAllPlayers);

router.post("/", playerController.addPlayer);
export default router;
