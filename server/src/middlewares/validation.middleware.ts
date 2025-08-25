import { body } from "express-validator";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const validatePlayer = [
  body("player")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long")
    .custom(async (value) => {
      const existingUser = await prisma.player.findUnique({
        where: { name: value },
      });
      if (existingUser) {
        throw new Error("Username is already in use");
      }
      return true;
    }),
];

module.exports = validatePlayer;
