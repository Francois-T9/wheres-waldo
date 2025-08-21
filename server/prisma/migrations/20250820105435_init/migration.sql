/*
  Warnings:

  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `xMax` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xMin` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yMax` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yMin` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Position" DROP CONSTRAINT "Position_characterId_fkey";

-- AlterTable
ALTER TABLE "public"."Character" ADD COLUMN     "xMax" INTEGER NOT NULL,
ADD COLUMN     "xMin" INTEGER NOT NULL,
ADD COLUMN     "yMax" INTEGER NOT NULL,
ADD COLUMN     "yMin" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."Position";
