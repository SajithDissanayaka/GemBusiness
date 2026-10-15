/*
  Warnings:

  - Changed the type of `carat` on the `Gem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Gem" DROP COLUMN "carat",
ADD COLUMN     "carat" DOUBLE PRECISION NOT NULL;
