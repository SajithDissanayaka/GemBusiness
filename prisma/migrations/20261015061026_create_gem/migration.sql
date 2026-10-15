-- CreateEnum
CREATE TYPE "GemAvailability" AS ENUM ('AVAILABLE', 'RESERVED', 'SOLD');

-- CreateTable
CREATE TABLE "Gem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "carat" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "shape" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "clarity" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "availability" "GemAvailability" NOT NULL DEFAULT 'AVAILABLE',
    "certificateNumber" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gem_certificateNumber_key" ON "Gem"("certificateNumber");
