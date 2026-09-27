-- CreateTable
CREATE TABLE `directorperiodoagrupacion` (
    `id` CHAR(36) NOT NULL,
    `directorPeriodoId` CHAR(36) NOT NULL,
    `agrupacionId` CHAR(36) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `DirectorPeriodoAgrupacion_agrupacionId_idx`(`agrupacionId`),
    UNIQUE INDEX `DirectorPeriodoAgrupacion_directorPeriodoId_agrupacionId_key`(`directorPeriodoId`, `agrupacionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `directorperiodoagrupacion` ADD CONSTRAINT `DirectorPeriodoAgrupacion_directorPeriodoId_fkey` FOREIGN KEY (`directorPeriodoId`) REFERENCES `directorperiodo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `directorperiodoagrupacion` ADD CONSTRAINT `DirectorPeriodoAgrupacion_agrupacionId_fkey` FOREIGN KEY (`agrupacionId`) REFERENCES `agrupacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
