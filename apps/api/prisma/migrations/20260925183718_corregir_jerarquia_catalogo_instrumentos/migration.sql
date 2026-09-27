/*
  Warnings:

  - You are about to drop the column `seccionId` on the `familia` table. All the data in the column will be lost.
  - You are about to drop the column `familiaId` on the `instrumento` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nombre]` on the table `familia` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[seccionId,nombre]` on the table `instrumento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[familiaId,nombre]` on the table `seccion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seccionId` to the `instrumento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `familiaId` to the `seccion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `familia` DROP FOREIGN KEY `Familia_seccionId_fkey`;

-- DropForeignKey
ALTER TABLE `instrumento` DROP FOREIGN KEY `Instrumento_familiaId_fkey`;

-- DropIndex
DROP INDEX `Familia_seccionId_idx` ON `familia`;

-- DropIndex
DROP INDEX `Familia_seccionId_nombre_key` ON `familia`;

-- DropIndex
DROP INDEX `Instrumento_familiaId_idx` ON `instrumento`;

-- DropIndex
DROP INDEX `Instrumento_familiaId_nombre_key` ON `instrumento`;

-- DropIndex
DROP INDEX `Seccion_nombre_key` ON `seccion`;

-- AlterTable
ALTER TABLE `familia` DROP COLUMN `seccionId`;

-- AlterTable
ALTER TABLE `instrumento` DROP COLUMN `familiaId`,
    ADD COLUMN `seccionId` CHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE `seccion` ADD COLUMN `familiaId` CHAR(36) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Familia_nombre_key` ON `familia`(`nombre`);

-- CreateIndex
CREATE INDEX `Instrumento_seccionId_idx` ON `instrumento`(`seccionId`);

-- CreateIndex
CREATE UNIQUE INDEX `Instrumento_seccionId_nombre_key` ON `instrumento`(`seccionId`, `nombre`);

-- CreateIndex
CREATE INDEX `Seccion_familiaId_idx` ON `seccion`(`familiaId`);

-- CreateIndex
CREATE UNIQUE INDEX `Seccion_familiaId_nombre_key` ON `seccion`(`familiaId`, `nombre`);

-- AddForeignKey
ALTER TABLE `seccion` ADD CONSTRAINT `Seccion_familiaId_fkey` FOREIGN KEY (`familiaId`) REFERENCES `familia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `instrumento` ADD CONSTRAINT `Instrumento_seccionId_fkey` FOREIGN KEY (`seccionId`) REFERENCES `seccion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
