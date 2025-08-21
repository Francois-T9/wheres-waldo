import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

const getCharacters = async (req, res) => {
  try {
    const charactersArray = await prisma.character.findMany();
    res.json(charactersArray);
  } catch (error) {
    res.status(500).json({ error: "error fetching players" });
  }
};
export default getCharacters;
