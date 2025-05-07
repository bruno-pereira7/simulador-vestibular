/*
  Warnings:

  - Added the required column `tema` to the `Redacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textosAuxiliares` to the `Redacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Redacao" ADD COLUMN     "tema" TEXT NOT NULL,
ADD COLUMN     "textosAuxiliares" TEXT NOT NULL,
ALTER COLUMN "correcao" DROP NOT NULL;
