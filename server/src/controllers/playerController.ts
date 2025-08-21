import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

exports.getAllPlayers = async (req, res) => {
  try {
    const playersArray = await prisma.player.findMany();
    console.log(playersArray);
    res.json(playersArray);
  } catch (error) {
    res.status(500).json({ error: "error fetching players" });
  }
};

exports.addPlayer = async (
  req: { body: { player: string; score: any } },
  res: any
) => {
  const { player, score } = req.body;
  try {
    const newPlayer = await prisma.player.create({
      data: {
        name: player,
        score: score,
      },
    });
    res.json(newPlayer);
  } catch (error) {
    res.status(500).json({ error: "Error creating player" });
  }
};
