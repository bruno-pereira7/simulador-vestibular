/*
  Warnings:

  - Made the column `correcao` on table `Redacao` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Redacao" ALTER COLUMN "correcao" SET NOT NULL,
ALTER COLUMN "tema" DROP NOT NULL,
ALTER COLUMN "textosAuxiliares" DROP NOT NULL;
