/*
  Warnings:

  - You are about to drop the column `familia` on the `instrumento` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[familiaId,nombre]` on the table `instrumento` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `familiaId` to the `instrumento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `instrumento` DROP COLUMN `familia`,
    ADD COLUMN `familiaId` CHAR(36) NOT NULL;

-- CreateTable
CREATE TABLE `familia` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `seccionId` CHAR(36) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Familia_seccionId_idx`(`seccionId`),
    UNIQUE INDEX `Familia_seccionId_nombre_key`(`seccionId`, `nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seccion` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Seccion_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Instrumento_familiaId_idx` ON `instrumento`(`familiaId`);

-- CreateIndex
CREATE UNIQUE INDEX `Instrumento_familiaId_nombre_key` ON `instrumento`(`familiaId`, `nombre`);

-- AddForeignKey
ALTER TABLE `familia` ADD CONSTRAINT `Familia_seccionId_fkey` FOREIGN KEY (`seccionId`) REFERENCES `seccion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `instrumento` ADD CONSTRAINT `Instrumento_familiaId_fkey` FOREIGN KEY (`familiaId`) REFERENCES `familia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
