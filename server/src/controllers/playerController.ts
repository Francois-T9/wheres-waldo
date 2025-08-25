import { PrismaClient } from "../../generated/prisma";
import { validationResult } from "express-validator";
const prisma = new PrismaClient();

exports.getAllPlayers = async (req, res) => {
  try {
    const playersArray = await prisma.player.findMany();
    res.json(playersArray);
  } catch (error) {
    res.status(500).json({ error: "error fetching players" });
  }
};

exports.addPlayer = async (
  req: { body: { player: string; score?: number } },
  res: any
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
  const { player, score } = req.body;

  const existingUser = await prisma.player.findUnique({
    where: { name: player },
  });
  if (existingUser) {
    res.status(500);
  } else {
    try {
      const newPlayer = await prisma.player.create({
        data: {
          name: player,
          score: score ?? 0,
        },
      });
      res.status(201).json(newPlayer);
    } catch (error) {
      res.status(500).json({ error: "Error creating player" });
    }
  }
};

exports.updatePlayer = async (
  req: { body: { player: string; score?: number } },
  res: any
) => {
  const { player, score } = req.body;
  // });
  try {
    const updatedPlayer = await prisma.player.update({
      where: {
        name: player,
      },
      data: {
        score: score,
      },
    });
    res.json({ updatedPlayer });
  } catch (error) {
    res.status(500).json({ error: "Cannot update player" });
  }
};
