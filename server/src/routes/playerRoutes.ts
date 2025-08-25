import express from "express";
const router = express.Router();
const playerController = require("../controllers/playerController");
const validatePlayer = require("../middlewares/validation.middleware");
router.get("/", playerController.getAllPlayers);

router.post("/", validatePlayer, playerController.addPlayer);
router.put("/", playerController.updatePlayer);
export default router;
