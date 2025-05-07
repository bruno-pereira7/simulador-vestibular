/*
  Warnings:

  - Added the required column `curso` to the `Simulado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Simulado" ADD COLUMN     "curso" TEXT NOT NULL;
