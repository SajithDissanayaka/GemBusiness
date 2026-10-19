-- CreateTable
CREATE TABLE "GemImage" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "gemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GemImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GemImage" ADD CONSTRAINT "GemImage_gemId_fkey" FOREIGN KEY ("gemId") REFERENCES "Gem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
