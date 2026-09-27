-- CreateTable
CREATE TABLE `musicoperiodo` (
    `id` CHAR(36) NOT NULL,
    `musicoId` CHAR(36) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `motivoBaja` ENUM('BAJA_VOLUNTARIA', 'DEJA_DE_PERTENECER_UMT', 'OTRO') NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `MusicoPeriodo_musicoId_fechaInicio_idx`(`musicoId`, `fechaInicio`),
    INDEX `MusicoPeriodo_musicoId_fechaFin_idx`(`musicoId`, `fechaFin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alumnoperiodo` (
    `id` CHAR(36) NOT NULL,
    `alumnoId` CHAR(36) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `motivoBaja` ENUM('FINALIZACION_ESTUDIOS', 'BAJA_VOLUNTARIA', 'TRASLADO', 'ABANDONO', 'OTRO') NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `AlumnoPeriodo_alumnoId_fechaInicio_idx`(`alumnoId`, `fechaInicio`),
    INDEX `AlumnoPeriodo_alumnoId_fechaFin_idx`(`alumnoId`, `fechaFin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profesorperiodo` (
    `id` CHAR(36) NOT NULL,
    `profesorId` CHAR(36) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `motivoBaja` ENUM('FIN_RELACION', 'BAJA_VOLUNTARIA', 'JUBILACION', 'OTRO') NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ProfesorPeriodo_profesorId_fechaInicio_idx`(`profesorId`, `fechaInicio`),
    INDEX `ProfesorPeriodo_profesorId_fechaFin_idx`(`profesorId`, `fechaFin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `directorperiodo` (
    `id` CHAR(36) NOT NULL,
    `directorId` CHAR(36) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `motivoBaja` ENUM('BAJA_VOLUNTARIA', 'FIN_RELACION', 'OTRO') NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `DirectorPeriodo_directorId_fechaInicio_idx`(`directorId`, `fechaInicio`),
    INDEX `DirectorPeriodo_directorId_fechaFin_idx`(`directorId`, `fechaFin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `musicoperiodo` ADD CONSTRAINT `MusicoPeriodo_musicoId_fkey` FOREIGN KEY (`musicoId`) REFERENCES `musico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alumnoperiodo` ADD CONSTRAINT `AlumnoPeriodo_alumnoId_fkey` FOREIGN KEY (`alumnoId`) REFERENCES `alumno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profesorperiodo` ADD CONSTRAINT `ProfesorPeriodo_profesorId_fkey` FOREIGN KEY (`profesorId`) REFERENCES `profesor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `directorperiodo` ADD CONSTRAINT `DirectorPeriodo_directorId_fkey` FOREIGN KEY (`directorId`) REFERENCES `director`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;