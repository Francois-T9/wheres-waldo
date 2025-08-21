import express from "express";

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
import playerRoutes from "./routes/playerRoutes";
import charactersRoutes from "./routes/charactersRoute";
app.use(bodyParser.json());
app.use("/api/players", playerRoutes);
app.use("/api/characters", charactersRoutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
