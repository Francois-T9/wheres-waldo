import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

const initialCharacters = [
  {
    name: "Waldo",
    xMin: 1819,

    xMax: 1893,

    yMin: 699,

    yMax: 815,
  },
  {
    name: "Wizard",
    xMin: 783,

    xMax: 858,

    yMin: 644,

    yMax: 737,
  },
  {
    name: "Odlaw",
    xMin: 305,

    xMax: 341,

    yMin: 664,

    yMax: 755,
  },
  {
    name: "Wilma",
    xMin: 2295,

    xMax: 2337,

    yMin: 767,

    yMax: 820,
  },
];
async function main() {
  initialCharacters.map(async (char) => {
    await prisma.character.create({
      data: {
        name: char.name,
        xMin: char.xMin,
        xMax: char.xMax,
        yMin: char.yMin,
        yMax: char.yMax,
      },
    });
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    prisma.$disconnect();
    process.exit(1);
  });
