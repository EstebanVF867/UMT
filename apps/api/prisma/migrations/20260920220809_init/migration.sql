-- CreateTable
CREATE TABLE `Persona` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `apellidos` VARCHAR(150) NOT NULL,
    `dni` VARCHAR(20) NULL,
    `fechaNacimiento` DATE NULL,
    `email` VARCHAR(255) NULL,
    `telefono` VARCHAR(30) NULL,
    `observaciones` TEXT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `fechaBaja` DATE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Persona_apellidos_nombre_idx`(`apellidos`, `nombre`),
    INDEX `Persona_activo_idx`(`activo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` CHAR(36) NOT NULL,
    `personaId` CHAR(36) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `passwordHash` VARCHAR(255) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `ultimoAccesoAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuario_personaId_key`(`personaId`),
    UNIQUE INDEX `Usuario_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sesion` (
    `id` CHAR(36) NOT NULL,
    `userId` CHAR(36) NOT NULL,
    `tokenHash` VARCHAR(255) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUsedAt` DATETIME(3) NULL,
    `revokedAt` DATETIME(3) NULL,
    `ipAddress` VARCHAR(45) NULL,
    `userAgent` VARCHAR(500) NOT NULL,

    INDEX `Sesion_userId_idx`(`userId`),
    INDEX `Sesion_tokenHash_idx`(`tokenHash`),
    INDEX `Sesion_expiresAt_idx`(`expiresAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AuditLog` (
    `id` CHAR(36) NOT NULL,
    `userId` CHAR(36) NULL,
    `action` ENUM('CREATE', 'UPDATE', 'DELETE', 'RESTORE', 'LOGIN', 'LOGOUT', 'LOGIN_FAILED', 'EXPORT') NOT NULL,
    `entity` VARCHAR(100) NOT NULL,
    `entityId` CHAR(36) NULL,
    `description` TEXT NULL,
    `metadata` JSON NULL,
    `ipAddress` VARCHAR(45) NULL,
    `userAgent` VARCHAR(500) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `AuditLog_createdAt_idx`(`createdAt`),
    INDEX `AuditLog_userId_idx`(`userId`),
    INDEX `AuditLog_entity_entityId_idx`(`entity`, `entityId`),
    INDEX `AuditLog_action_idx`(`action`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RolFuncional` (
    `id` CHAR(36) NOT NULL,
    `codigo` VARCHAR(50) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RolFuncional_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PersonaRolFuncional` (
    `id` CHAR(36) NOT NULL,
    `personaId` CHAR(36) NOT NULL,
    `rolFuncionalId` CHAR(36) NOT NULL,

    INDEX `PersonaRolFuncional_rolFuncionalId_idx`(`rolFuncionalId`),
    UNIQUE INDEX `PersonaRolFuncional_personaId_rolFuncionalId_key`(`personaId`, `rolFuncionalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agrupacion` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` VARCHAR(255) NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PersonaAgrupacion` (
    `id` CHAR(36) NOT NULL,
    `personaId` CHAR(36) NOT NULL,
    `agrupacionId` CHAR(36) NOT NULL,
    `fechaAlta` DATE NOT NULL,
    `fechaBaja` DATE NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `PersonaAgrupacion_agrupacionId_activo_idx`(`agrupacionId`, `activo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Instrumento` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `familia` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Instrumento_nombre_idx`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PersonaInstrumento` (
    `id` CHAR(36) NOT NULL,
    `personaId` CHAR(36) NOT NULL,
    `instrumentoId` CHAR(36) NOT NULL,
    `principal` BOOLEAN NOT NULL DEFAULT false,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `PersonaInstrumento_instrumentoId_idx`(`instrumentoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Musico` (
    `id` CHAR(36) NOT NULL,
    `personaId` CHAR(36) NOT NULL,
    `fechaAlta` DATE NOT NULL,
    `fechaBaja` DATE NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,

    UNIQUE INDEX `Musico_personaId_key`(`personaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alumno` (
    `id` CHAR(36) NOT NULL,
    `personaId` CHAR(36) NOT NULL,
    `fechaAlta` DATE NOT NULL,
    `fechaBaja` DATE NULL,
    `motivoBaja` ENUM('FINALIZACION_ESTUDIOS', 'BAJA_VOLUNTARIA', 'TRASLADO', 'ABANDONO', 'OTRO') NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,

    UNIQUE INDEX `Alumno_personaId_key`(`personaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profesor` (
    `id` CHAR(36) NOT NULL,
    `personaId` CHAR(36) NOT NULL,
    `fechaAlta` DATE NOT NULL,
    `fechaBaja` DATE NULL,
    `motivoBaja` ENUM('FIN_RELACION', 'BAJA_VOLUNTARIA', 'JUBILACION', 'OTRO') NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,

    UNIQUE INDEX `Profesor_personaId_key`(`personaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Director` (
    `id` CHAR(36) NOT NULL,
    `personaId` CHAR(36) NOT NULL,
    `fechaAlta` DATE NOT NULL,
    `fechaBaja` DATE NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,

    UNIQUE INDEX `Director_personaId_key`(`personaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materia` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `tipo` ENUM('INSTRUMENTO', 'LENGUAJE_MUSICAL', 'OTRA') NOT NULL,
    `descripcion` TEXT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aula` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,
    `capacidad` INTEGER NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clase` (
    `id` CHAR(36) NOT NULL,
    `alumnoId` CHAR(36) NOT NULL,
    `profesorId` CHAR(36) NOT NULL,
    `materiaId` CHAR(36) NOT NULL,
    `aulaId` CHAR(36) NOT NULL,
    `diaSemana` INTEGER NOT NULL,
    `horaInicio` TIME(0) NOT NULL,
    `horaFin` TIME(0) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `estado` ENUM('ACTIVA', 'FINALIZADA', 'CANCELADA') NOT NULL DEFAULT 'ACTIVA',
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Clase_alumnoId_fechaInicio_idx`(`alumnoId`, `fechaInicio`),
    INDEX `Clase_profesorId_fechaInicio_idx`(`profesorId`, `fechaInicio`),
    INDEX `Clase_aulaId_fechaInicio_idx`(`aulaId`, `fechaInicio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tarifa` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `importe` DECIMAL(12, 2) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Tarifa_fechaInicio_fechaFin_idx`(`fechaInicio`, `fechaFin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CondicionCuota` (
    `id` CHAR(36) NOT NULL,
    `alumnoId` CHAR(36) NOT NULL,
    `tipo` ENUM('DESCUENTO_FIJO', 'DESCUENTO_PORCENTUAL', 'CUOTA_ESPECIAL', 'EXENCION', 'RECARGO', 'AJUSTE_PUNTUAL') NOT NULL,
    `valor` DECIMAL(12, 2) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `motivo` ENUM('BONIFICACION', 'SITUACION_FAMILIAR', 'BECA', 'AUSENCIA_JUSTIFICADA', 'AUTORIZACION_DIRECTIVA', 'ERROR_REGULARIZACION', 'OTRO') NOT NULL,
    `observaciones` TEXT NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `autorizadaPor` VARCHAR(150) NULL,
    `fechaAutorizacion` DATE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CondicionCuota_alumnoId_fechaInicio_fechaFin_idx`(`alumnoId`, `fechaInicio`, `fechaFin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cuota` (
    `id` CHAR(36) NOT NULL,
    `alumnoId` CHAR(36) NOT NULL,
    `tarifaId` CHAR(36) NOT NULL,
    `fecha` DATE NOT NULL,
    `importeBase` DECIMAL(12, 2) NOT NULL,
    `ajuste` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `importeFinal` DECIMAL(12, 2) NOT NULL,
    `motivoAjuste` VARCHAR(255) NULL,
    `estado` ENUM('PENDIENTE', 'ENVIADA_BANCO', 'PARCIAL', 'PAGADA', 'DEVUELTA', 'ANULADA') NOT NULL DEFAULT 'PENDIENTE',
    `fechaEnvioBanco` DATE NULL,
    `motivoDevolucion` ENUM('FONDOS_INSUFICIENTES', 'CUENTA_INCORRECTA', 'RECIBO_RECHAZADO', 'CUENTA_CANCELADA', 'DEVOLUCION_SOLICITADA', 'OTROS') NULL,
    `asientoId` CHAR(36) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Cuota_alumnoId_fecha_idx`(`alumnoId`, `fecha`),
    INDEX `Cuota_tarifaId_idx`(`tarifaId`),
    INDEX `Cuota_estado_idx`(`estado`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Remesa` (
    `id` CHAR(36) NOT NULL,
    `fecha` DATE NOT NULL,
    `estado` ENUM('PREPARADA', 'ENVIADA', 'PROCESADA', 'CANCELADA') NOT NULL DEFAULT 'PREPARADA',
    `referencia` VARCHAR(100) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RemesaCuota` (
    `id` CHAR(36) NOT NULL,
    `remesaId` CHAR(36) NOT NULL,
    `cuotaId` CHAR(36) NOT NULL,
    `importe` DECIMAL(12, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `RemesaCuota_remesaId_idx`(`remesaId`),
    INDEX `RemesaCuota_cuotaId_idx`(`cuotaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` CHAR(36) NOT NULL,
    `nombreRazonSocial` VARCHAR(200) NOT NULL,
    `nifCif` VARCHAR(30) NULL,
    `tipoCliente` VARCHAR(50) NULL,
    `personaContacto` VARCHAR(150) NULL,
    `telefono` VARCHAR(30) NULL,
    `email` VARCHAR(255) NULL,
    `direccionFiscal` VARCHAR(255) NULL,
    `codigoPostal` VARCHAR(15) NULL,
    `localidad` VARCHAR(100) NULL,
    `provincia` VARCHAR(100) NULL,
    `pais` VARCHAR(100) NULL,
    `iban` VARCHAR(34) NULL,
    `formaCobro` VARCHAR(50) NULL,
    `plazoCobro` VARCHAR(50) NULL,
    `observacionesCobro` TEXT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Cliente_nombreRazonSocial_idx`(`nombreRazonSocial`),
    INDEX `Cliente_nifCif_idx`(`nifCif`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contratacion` (
    `id` CHAR(36) NOT NULL,
    `clienteId` CHAR(36) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `descripcion` TEXT NOT NULL,
    `importeAcordado` DECIMAL(12, 2) NULL,
    `estado` VARCHAR(30) NOT NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Contratacion_clienteId_fechaInicio_idx`(`clienteId`, `fechaInicio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Actuacion` (
    `id` CHAR(36) NOT NULL,
    `ejercicioId` CHAR(36) NOT NULL,
    `contratacionId` CHAR(36) NULL,
    `fecha` DATE NOT NULL,
    `nombre` VARCHAR(200) NOT NULL,
    `lugar` VARCHAR(255) NULL,
    `importeAcordado` DECIMAL(12, 2) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Actuacion_ejercicioId_fecha_idx`(`ejercicioId`, `fecha`),
    INDEX `Actuacion_contratacionId_idx`(`contratacionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActuacionAgrupacion` (
    `id` CHAR(36) NOT NULL,
    `actuacionId` CHAR(36) NOT NULL,
    `agrupacionId` CHAR(36) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ActuacionAgrupacion_agrupacionId_idx`(`agrupacionId`),
    UNIQUE INDEX `ActuacionAgrupacion_actuacionId_agrupacionId_key`(`actuacionId`, `agrupacionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Asistencia` (
    `id` CHAR(36) NOT NULL,
    `actuacionId` CHAR(36) NOT NULL,
    `musicoId` CHAR(36) NOT NULL,
    `tipoActividad` ENUM('ENSAYO', 'ACTUACION', 'OTRA') NOT NULL,
    `estado` ENUM('PROVISIONAL', 'ASISTIO', 'NO_CONSTA') NOT NULL DEFAULT 'PROVISIONAL',
    `fechaRegistro` DATETIME(3) NOT NULL,
    `origen` VARCHAR(50) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Asistencia_musicoId_fechaRegistro_idx`(`musicoId`, `fechaRegistro`),
    UNIQUE INDEX `Asistencia_actuacionId_musicoId_key`(`actuacionId`, `musicoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contrato` (
    `id` CHAR(36) NOT NULL,
    `profesorId` CHAR(36) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NULL,
    `salarioHora` DECIMAL(12, 2) NOT NULL,
    `periodicidad` ENUM('MENSUAL', 'SEMANAL', 'QUINCENAL', 'OTRA') NOT NULL,
    `estado` ENUM('ACTIVO', 'FINALIZADO', 'ANULADO') NOT NULL DEFAULT 'ACTIVO',
    `observaciones` TEXT NULL,
    `nextcloudReferencia` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Contrato_profesorId_fechaInicio_idx`(`profesorId`, `fechaInicio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nomina` (
    `id` CHAR(36) NOT NULL,
    `profesorId` CHAR(36) NOT NULL,
    `contratoId` CHAR(36) NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NOT NULL,
    `fechaPago` DATE NULL,
    `salarioBruto` DECIMAL(12, 2) NOT NULL,
    `irpf` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `ssTrabajador` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `ssUMT` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `totalNeto` DECIMAL(12, 2) NOT NULL,
    `estado` ENUM('BORRADOR', 'CALCULADA', 'REVISADA', 'ENVIADA_GESTORIA', 'CONFIRMADA', 'CONTABILIZADA', 'ANULADA') NOT NULL DEFAULT 'BORRADOR',
    `asientoId` CHAR(36) NULL,
    `origenCalculo` VARCHAR(50) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Nomina_profesorId_fechaInicio_idx`(`profesorId`, `fechaInicio`),
    INDEX `Nomina_contratoId_idx`(`contratoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LineaNomina` (
    `id` CHAR(36) NOT NULL,
    `nominaId` CHAR(36) NOT NULL,
    `tipo` ENUM('COMPLEMENTO', 'PAGA_EXTRAORDINARIA', 'ANTICIPO', 'DIETA', 'OTROS_CONCEPTOS_RETRIBUTIVOS', 'OTROS_DESCUENTOS') NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `importe` DECIMAL(12, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `LineaNomina_nominaId_idx`(`nominaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reparto` (
    `id` CHAR(36) NOT NULL,
    `ejercicioId` CHAR(36) NOT NULL,
    `fechaCierre` DATE NULL,
    `estado` ENUM('BORRADOR', 'CERRADO') NOT NULL DEFAULT 'BORRADOR',
    `porcentajeUMT` DECIMAL(5, 2) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Reparto_ejercicioId_idx`(`ejercicioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LineaReparto` (
    `id` CHAR(36) NOT NULL,
    `repartoId` CHAR(36) NOT NULL,
    `musicoId` CHAR(36) NOT NULL,
    `actuacionesComputadas` INTEGER NOT NULL,
    `importeBruto` DECIMAL(12, 2) NOT NULL,
    `porcentajeUMT` DECIMAL(5, 2) NOT NULL,
    `complementos` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `deducciones` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `importeFinal` DECIMAL(12, 2) NOT NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `LineaReparto_musicoId_idx`(`musicoId`),
    UNIQUE INDEX `LineaReparto_repartoId_musicoId_key`(`repartoId`, `musicoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proveedor` (
    `id` CHAR(36) NOT NULL,
    `nombreRazonSocial` VARCHAR(200) NOT NULL,
    `nifCif` VARCHAR(30) NULL,
    `tipoProveedor` VARCHAR(50) NULL,
    `personaContacto` VARCHAR(150) NULL,
    `telefono` VARCHAR(30) NULL,
    `email` VARCHAR(255) NULL,
    `direccionFiscal` VARCHAR(255) NULL,
    `codigoPostal` VARCHAR(15) NULL,
    `localidad` VARCHAR(100) NULL,
    `provincia` VARCHAR(100) NULL,
    `pais` VARCHAR(100) NULL,
    `iban` VARCHAR(34) NULL,
    `formaPago` VARCHAR(50) NULL,
    `plazoPago` VARCHAR(50) NULL,
    `observacionesPago` TEXT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Proveedor_nombreRazonSocial_idx`(`nombreRazonSocial`),
    INDEX `Proveedor_nifCif_idx`(`nifCif`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacturaProveedor` (
    `id` CHAR(36) NOT NULL,
    `proveedorId` CHAR(36) NOT NULL,
    `numero` VARCHAR(100) NOT NULL,
    `fechaFactura` DATE NOT NULL,
    `fechaRegistro` DATE NOT NULL,
    `vencimiento` DATE NULL,
    `concepto` TEXT NOT NULL,
    `base` DECIMAL(12, 2) NOT NULL,
    `iva` DECIMAL(12, 2) NOT NULL,
    `total` DECIMAL(12, 2) NOT NULL,
    `estado` ENUM('PENDIENTE', 'CONTABILIZADA', 'PARCIALMENTE_PAGADA', 'PAGADA', 'ANULADA') NOT NULL DEFAULT 'PENDIENTE',
    `asientoId` CHAR(36) NULL,
    `cuentaContableId` CHAR(36) NULL,
    `centroAnaliticoId` CHAR(36) NULL,
    `proyecto` VARCHAR(255) NULL,
    `actuacionId` CHAR(36) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `FacturaProveedor_estado_idx`(`estado`),
    INDEX `FacturaProveedor_fechaFactura_idx`(`fechaFactura`),
    UNIQUE INDEX `FacturaProveedor_proveedorId_numero_key`(`proveedorId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacturaRectificativaProveedor` (
    `id` CHAR(36) NOT NULL,
    `facturaOriginalId` CHAR(36) NOT NULL,
    `numero` VARCHAR(100) NOT NULL,
    `fechaFactura` DATE NOT NULL,
    `concepto` TEXT NOT NULL,
    `base` DECIMAL(12, 2) NOT NULL,
    `iva` DECIMAL(12, 2) NOT NULL,
    `total` DECIMAL(12, 2) NOT NULL,
    `asientoId` CHAR(36) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FacturaRectificativaProveedor_facturaOriginalId_numero_key`(`facturaOriginalId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pago` (
    `id` CHAR(36) NOT NULL,
    `fechaPago` DATE NOT NULL,
    `proveedorId` CHAR(36) NOT NULL,
    `importeTotal` DECIMAL(12, 2) NOT NULL,
    `cuentaFinancieraId` CHAR(36) NOT NULL,
    `medioPago` ENUM('TRANSFERENCIA', 'EFECTIVO', 'DOMICILIACION', 'OTRO') NOT NULL,
    `concepto` TEXT NOT NULL,
    `referencia` VARCHAR(100) NULL,
    `observaciones` TEXT NULL,
    `movimientoFinancieroId` CHAR(36) NOT NULL,
    `asientoId` CHAR(36) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pago_movimientoFinancieroId_key`(`movimientoFinancieroId`),
    INDEX `Pago_proveedorId_fechaPago_idx`(`proveedorId`, `fechaPago`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ObligacionEconomica` (
    `id` CHAR(36) NOT NULL,
    `ejercicioId` CHAR(36) NOT NULL,
    `cuotaId` CHAR(36) NULL,
    `facturaProveedorId` CHAR(36) NULL,
    `nominaId` CHAR(36) NULL,
    `repartoId` CHAR(36) NULL,
    `importe` DECIMAL(12, 2) NOT NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ObligacionEconomica_ejercicioId_idx`(`ejercicioId`),
    UNIQUE INDEX `ObligacionEconomica_cuotaId_key`(`cuotaId`),
    UNIQUE INDEX `ObligacionEconomica_facturaProveedorId_key`(`facturaProveedorId`),
    UNIQUE INDEX `ObligacionEconomica_nominaId_key`(`nominaId`),
    UNIQUE INDEX `ObligacionEconomica_repartoId_key`(`repartoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LiquidacionPago` (
    `id` CHAR(36) NOT NULL,
    `obligationId` CHAR(36) NOT NULL,
    `paymentId` CHAR(36) NOT NULL,
    `importe` DECIMAL(12, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `LiquidacionPago_paymentId_idx`(`paymentId`),
    UNIQUE INDEX `LiquidacionPago_obligationId_paymentId_key`(`obligationId`, `paymentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacturaCliente` (
    `id` CHAR(36) NOT NULL,
    `clienteId` CHAR(36) NOT NULL,
    `contratacionId` CHAR(36) NULL,
    `actuacionId` CHAR(36) NULL,
    `numero` VARCHAR(100) NOT NULL,
    `fechaFactura` DATE NOT NULL,
    `vencimiento` DATE NULL,
    `concepto` TEXT NOT NULL,
    `base` DECIMAL(12, 2) NOT NULL,
    `iva` DECIMAL(12, 2) NOT NULL,
    `total` DECIMAL(12, 2) NOT NULL,
    `estado` ENUM('PENDIENTE', 'CONTABILIZADA', 'PARCIALMENTE_COBRADA', 'COBRADA', 'ANULADA') NOT NULL DEFAULT 'PENDIENTE',
    `asientoId` CHAR(36) NULL,
    `cuentaContableId` CHAR(36) NULL,
    `centroAnaliticoId` CHAR(36) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `FacturaCliente_estado_idx`(`estado`),
    INDEX `FacturaCliente_fechaFactura_idx`(`fechaFactura`),
    UNIQUE INDEX `FacturaCliente_clienteId_numero_key`(`clienteId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacturaRectificativaCliente` (
    `id` CHAR(36) NOT NULL,
    `facturaOriginalId` CHAR(36) NOT NULL,
    `numero` VARCHAR(100) NOT NULL,
    `fechaFactura` DATE NOT NULL,
    `concepto` TEXT NOT NULL,
    `base` DECIMAL(12, 2) NOT NULL,
    `iva` DECIMAL(12, 2) NOT NULL,
    `total` DECIMAL(12, 2) NOT NULL,
    `asientoId` CHAR(36) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FacturaRectificativaCliente_facturaOriginalId_numero_key`(`facturaOriginalId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cobro` (
    `id` CHAR(36) NOT NULL,
    `fechaCobro` DATE NOT NULL,
    `clienteId` CHAR(36) NOT NULL,
    `importeTotal` DECIMAL(12, 2) NOT NULL,
    `cuentaFinancieraId` CHAR(36) NOT NULL,
    `medioPago` ENUM('TRANSFERENCIA', 'EFECTIVO', 'DOMICILIACION', 'OTRO') NOT NULL,
    `concepto` TEXT NOT NULL,
    `referencia` VARCHAR(100) NULL,
    `observaciones` TEXT NULL,
    `movimientoFinancieroId` CHAR(36) NOT NULL,
    `asientoId` CHAR(36) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Cobro_movimientoFinancieroId_key`(`movimientoFinancieroId`),
    INDEX `Cobro_clienteId_fechaCobro_idx`(`clienteId`, `fechaCobro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DerechoCobro` (
    `id` CHAR(36) NOT NULL,
    `facturaClienteId` CHAR(36) NOT NULL,
    `importe` DECIMAL(12, 2) NOT NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DerechoCobro_facturaClienteId_key`(`facturaClienteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LiquidacionCobro` (
    `id` CHAR(36) NOT NULL,
    `derechoCobroId` CHAR(36) NOT NULL,
    `cobroId` CHAR(36) NOT NULL,
    `importe` DECIMAL(12, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `LiquidacionCobro_cobroId_idx`(`cobroId`),
    UNIQUE INDEX `LiquidacionCobro_derechoCobroId_cobroId_key`(`derechoCobroId`, `cobroId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CuentaFinanciera` (
    `id` CHAR(36) NOT NULL,
    `tipo` ENUM('BANCO', 'EFECTIVO', 'OTRO') NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `banco` VARCHAR(150) NULL,
    `iban` VARCHAR(34) NULL,
    `moneda` VARCHAR(3) NOT NULL,
    `fechaApertura` DATE NULL,
    `fechaCierre` DATE NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `cuentaContableId` CHAR(36) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CuentaFinanciera_tipo_activa_idx`(`tipo`, `activa`),
    INDEX `CuentaFinanciera_iban_idx`(`iban`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovimientoFinanciero` (
    `id` CHAR(36) NOT NULL,
    `cuentaFinancieraId` CHAR(36) NOT NULL,
    `fecha` DATE NOT NULL,
    `tipo` ENUM('INGRESO', 'GASTO', 'TRANSFERENCIA', 'AJUSTE') NOT NULL,
    `concepto` TEXT NOT NULL,
    `importe` DECIMAL(12, 2) NOT NULL,
    `referencia` VARCHAR(100) NULL,
    `conciliacion` ENUM('PENDIENTE', 'CONCILIADO') NOT NULL DEFAULT 'PENDIENTE',
    `fechaConciliacion` DATE NULL,
    `conciliadoPor` VARCHAR(150) NULL,
    `grupoTransferencia` CHAR(36) NULL,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `MovimientoFinanciero_cuentaFinancieraId_fecha_idx`(`cuentaFinancieraId`, `fecha`),
    INDEX `MovimientoFinanciero_conciliacion_idx`(`conciliacion`),
    INDEX `MovimientoFinanciero_grupoTransferencia_idx`(`grupoTransferencia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AsientoMovimiento` (
    `id` CHAR(36) NOT NULL,
    `asientoId` CHAR(36) NOT NULL,
    `movimientoFinancieroId` CHAR(36) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `AsientoMovimiento_movimientoFinancieroId_idx`(`movimientoFinancieroId`),
    UNIQUE INDEX `AsientoMovimiento_asientoId_movimientoFinancieroId_key`(`asientoId`, `movimientoFinancieroId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CuentaContable` (
    `id` CHAR(36) NOT NULL,
    `codigo` VARCHAR(30) NOT NULL,
    `nombre` VARCHAR(150) NOT NULL,
    `tipo` ENUM('ACTIVO', 'PASIVO', 'PATRIMONIO_NETO', 'INGRESO', 'GASTO') NOT NULL,
    `naturaleza` ENUM('DEUDORA', 'ACREEDORA') NOT NULL,
    `nivel` INTEGER NOT NULL,
    `agrupadora` BOOLEAN NOT NULL DEFAULT false,
    `movimiento` BOOLEAN NOT NULL DEFAULT true,
    `fechaInicio` DATE NULL,
    `fechaFin` DATE NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CuentaContable_codigo_key`(`codigo`),
    INDEX `CuentaContable_tipo_activa_idx`(`tipo`, `activa`),
    INDEX `CuentaContable_nivel_idx`(`nivel`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ejercicio` (
    `id` CHAR(36) NOT NULL,
    `nombre` VARCHAR(50) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NOT NULL,
    `estado` ENUM('ABIERTO', 'CERRADO') NOT NULL DEFAULT 'ABIERTO',
    `observaciones` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Ejercicio_fechaInicio_fechaFin_idx`(`fechaInicio`, `fechaFin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PeriodoContable` (
    `id` CHAR(36) NOT NULL,
    `ejercicioId` CHAR(36) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `fechaInicio` DATE NOT NULL,
    `fechaFin` DATE NOT NULL,
    `estado` ENUM('ABIERTO', 'CERRADO') NOT NULL DEFAULT 'ABIERTO',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `PeriodoContable_ejercicioId_fechaInicio_fechaFin_idx`(`ejercicioId`, `fechaInicio`, `fechaFin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Asiento` (
    `id` CHAR(36) NOT NULL,
    `numero` INTEGER NOT NULL,
    `ejercicioId` CHAR(36) NOT NULL,
    `periodoContableId` CHAR(36) NULL,
    `fechaContabilizacion` DATE NOT NULL,
    `concepto` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Asiento_fechaContabilizacion_idx`(`fechaContabilizacion`),
    INDEX `Asiento_periodoContableId_idx`(`periodoContableId`),
    UNIQUE INDEX `Asiento_ejercicioId_numero_key`(`ejercicioId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LineaAsiento` (
    `id` CHAR(36) NOT NULL,
    `asientoId` CHAR(36) NOT NULL,
    `cuentaContableId` CHAR(36) NOT NULL,
    `concepto` TEXT NULL,
    `debe` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `haber` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `centroAnaliticoId` CHAR(36) NULL,
    `referencia` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `LineaAsiento_asientoId_idx`(`asientoId`),
    INDEX `LineaAsiento_cuentaContableId_idx`(`cuentaContableId`),
    INDEX `LineaAsiento_centroAnaliticoId_idx`(`centroAnaliticoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CentroAnalitico` (
    `id` CHAR(36) NOT NULL,
    `codigo` VARCHAR(50) NOT NULL,
    `nombre` VARCHAR(150) NOT NULL,
    `descripcion` TEXT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CentroAnalitico_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IntegracionNextcloud` (
    `id` CHAR(36) NOT NULL,
    `serverUrl` VARCHAR(500) NOT NULL,
    `estado` ENUM('CONFIGURADA', 'ACTIVA', 'ERROR', 'INACTIVA') NOT NULL DEFAULT 'CONFIGURADA',
    `mensajeEstado` TEXT NULL,
    `ultimaComprobacionAt` DATETIME(3) NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParametroSistema` (
    `id` CHAR(36) NOT NULL,
    `codigo` VARCHAR(100) NOT NULL,
    `nombre` VARCHAR(150) NOT NULL,
    `tipo` ENUM('STRING', 'INTEGER', 'DECIMAL', 'BOOLEAN', 'DATE', 'JSON') NOT NULL,
    `valor` TEXT NOT NULL,
    `descripcion` TEXT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ParametroSistema_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sesion` ADD CONSTRAINT `Sesion_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AuditLog` ADD CONSTRAINT `AuditLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonaRolFuncional` ADD CONSTRAINT `PersonaRolFuncional_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonaRolFuncional` ADD CONSTRAINT `PersonaRolFuncional_rolFuncionalId_fkey` FOREIGN KEY (`rolFuncionalId`) REFERENCES `RolFuncional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonaAgrupacion` ADD CONSTRAINT `PersonaAgrupacion_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonaAgrupacion` ADD CONSTRAINT `PersonaAgrupacion_agrupacionId_fkey` FOREIGN KEY (`agrupacionId`) REFERENCES `Agrupacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonaInstrumento` ADD CONSTRAINT `PersonaInstrumento_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonaInstrumento` ADD CONSTRAINT `PersonaInstrumento_instrumentoId_fkey` FOREIGN KEY (`instrumentoId`) REFERENCES `Instrumento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Musico` ADD CONSTRAINT `Musico_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alumno` ADD CONSTRAINT `Alumno_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profesor` ADD CONSTRAINT `Profesor_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Director` ADD CONSTRAINT `Director_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clase` ADD CONSTRAINT `Clase_alumnoId_fkey` FOREIGN KEY (`alumnoId`) REFERENCES `Alumno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clase` ADD CONSTRAINT `Clase_profesorId_fkey` FOREIGN KEY (`profesorId`) REFERENCES `Profesor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clase` ADD CONSTRAINT `Clase_materiaId_fkey` FOREIGN KEY (`materiaId`) REFERENCES `Materia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clase` ADD CONSTRAINT `Clase_aulaId_fkey` FOREIGN KEY (`aulaId`) REFERENCES `Aula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CondicionCuota` ADD CONSTRAINT `CondicionCuota_alumnoId_fkey` FOREIGN KEY (`alumnoId`) REFERENCES `Alumno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cuota` ADD CONSTRAINT `Cuota_alumnoId_fkey` FOREIGN KEY (`alumnoId`) REFERENCES `Alumno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cuota` ADD CONSTRAINT `Cuota_tarifaId_fkey` FOREIGN KEY (`tarifaId`) REFERENCES `Tarifa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RemesaCuota` ADD CONSTRAINT `RemesaCuota_remesaId_fkey` FOREIGN KEY (`remesaId`) REFERENCES `Remesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RemesaCuota` ADD CONSTRAINT `RemesaCuota_cuotaId_fkey` FOREIGN KEY (`cuotaId`) REFERENCES `Cuota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contratacion` ADD CONSTRAINT `Contratacion_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Actuacion` ADD CONSTRAINT `Actuacion_ejercicioId_fkey` FOREIGN KEY (`ejercicioId`) REFERENCES `Ejercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Actuacion` ADD CONSTRAINT `Actuacion_contratacionId_fkey` FOREIGN KEY (`contratacionId`) REFERENCES `Contratacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActuacionAgrupacion` ADD CONSTRAINT `ActuacionAgrupacion_actuacionId_fkey` FOREIGN KEY (`actuacionId`) REFERENCES `Actuacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActuacionAgrupacion` ADD CONSTRAINT `ActuacionAgrupacion_agrupacionId_fkey` FOREIGN KEY (`agrupacionId`) REFERENCES `Agrupacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asistencia` ADD CONSTRAINT `Asistencia_actuacionId_fkey` FOREIGN KEY (`actuacionId`) REFERENCES `Actuacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asistencia` ADD CONSTRAINT `Asistencia_musicoId_fkey` FOREIGN KEY (`musicoId`) REFERENCES `Musico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_profesorId_fkey` FOREIGN KEY (`profesorId`) REFERENCES `Profesor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nomina` ADD CONSTRAINT `Nomina_profesorId_fkey` FOREIGN KEY (`profesorId`) REFERENCES `Profesor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nomina` ADD CONSTRAINT `Nomina_contratoId_fkey` FOREIGN KEY (`contratoId`) REFERENCES `Contrato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LineaNomina` ADD CONSTRAINT `LineaNomina_nominaId_fkey` FOREIGN KEY (`nominaId`) REFERENCES `Nomina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reparto` ADD CONSTRAINT `Reparto_ejercicioId_fkey` FOREIGN KEY (`ejercicioId`) REFERENCES `Ejercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LineaReparto` ADD CONSTRAINT `LineaReparto_repartoId_fkey` FOREIGN KEY (`repartoId`) REFERENCES `Reparto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LineaReparto` ADD CONSTRAINT `LineaReparto_musicoId_fkey` FOREIGN KEY (`musicoId`) REFERENCES `Musico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaProveedor` ADD CONSTRAINT `FacturaProveedor_proveedorId_fkey` FOREIGN KEY (`proveedorId`) REFERENCES `Proveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaProveedor` ADD CONSTRAINT `FacturaProveedor_cuentaContableId_fkey` FOREIGN KEY (`cuentaContableId`) REFERENCES `CuentaContable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaProveedor` ADD CONSTRAINT `FacturaProveedor_centroAnaliticoId_fkey` FOREIGN KEY (`centroAnaliticoId`) REFERENCES `CentroAnalitico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaProveedor` ADD CONSTRAINT `FacturaProveedor_actuacionId_fkey` FOREIGN KEY (`actuacionId`) REFERENCES `Actuacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaRectificativaProveedor` ADD CONSTRAINT `FacturaRectificativaProveedor_facturaOriginalId_fkey` FOREIGN KEY (`facturaOriginalId`) REFERENCES `FacturaProveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pago` ADD CONSTRAINT `Pago_proveedorId_fkey` FOREIGN KEY (`proveedorId`) REFERENCES `Proveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pago` ADD CONSTRAINT `Pago_cuentaFinancieraId_fkey` FOREIGN KEY (`cuentaFinancieraId`) REFERENCES `CuentaFinanciera`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pago` ADD CONSTRAINT `Pago_movimientoFinancieroId_fkey` FOREIGN KEY (`movimientoFinancieroId`) REFERENCES `MovimientoFinanciero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ObligacionEconomica` ADD CONSTRAINT `ObligacionEconomica_ejercicioId_fkey` FOREIGN KEY (`ejercicioId`) REFERENCES `Ejercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ObligacionEconomica` ADD CONSTRAINT `ObligacionEconomica_cuotaId_fkey` FOREIGN KEY (`cuotaId`) REFERENCES `Cuota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ObligacionEconomica` ADD CONSTRAINT `ObligacionEconomica_facturaProveedorId_fkey` FOREIGN KEY (`facturaProveedorId`) REFERENCES `FacturaProveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ObligacionEconomica` ADD CONSTRAINT `ObligacionEconomica_nominaId_fkey` FOREIGN KEY (`nominaId`) REFERENCES `Nomina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ObligacionEconomica` ADD CONSTRAINT `ObligacionEconomica_repartoId_fkey` FOREIGN KEY (`repartoId`) REFERENCES `Reparto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LiquidacionPago` ADD CONSTRAINT `LiquidacionPago_obligationId_fkey` FOREIGN KEY (`obligationId`) REFERENCES `ObligacionEconomica`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LiquidacionPago` ADD CONSTRAINT `LiquidacionPago_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Pago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaCliente` ADD CONSTRAINT `FacturaCliente_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaCliente` ADD CONSTRAINT `FacturaCliente_contratacionId_fkey` FOREIGN KEY (`contratacionId`) REFERENCES `Contratacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaCliente` ADD CONSTRAINT `FacturaCliente_actuacionId_fkey` FOREIGN KEY (`actuacionId`) REFERENCES `Actuacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaCliente` ADD CONSTRAINT `FacturaCliente_cuentaContableId_fkey` FOREIGN KEY (`cuentaContableId`) REFERENCES `CuentaContable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaCliente` ADD CONSTRAINT `FacturaCliente_centroAnaliticoId_fkey` FOREIGN KEY (`centroAnaliticoId`) REFERENCES `CentroAnalitico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacturaRectificativaCliente` ADD CONSTRAINT `FacturaRectificativaCliente_facturaOriginalId_fkey` FOREIGN KEY (`facturaOriginalId`) REFERENCES `FacturaCliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cobro` ADD CONSTRAINT `Cobro_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cobro` ADD CONSTRAINT `Cobro_cuentaFinancieraId_fkey` FOREIGN KEY (`cuentaFinancieraId`) REFERENCES `CuentaFinanciera`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cobro` ADD CONSTRAINT `Cobro_movimientoFinancieroId_fkey` FOREIGN KEY (`movimientoFinancieroId`) REFERENCES `MovimientoFinanciero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DerechoCobro` ADD CONSTRAINT `DerechoCobro_facturaClienteId_fkey` FOREIGN KEY (`facturaClienteId`) REFERENCES `FacturaCliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LiquidacionCobro` ADD CONSTRAINT `LiquidacionCobro_derechoCobroId_fkey` FOREIGN KEY (`derechoCobroId`) REFERENCES `DerechoCobro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LiquidacionCobro` ADD CONSTRAINT `LiquidacionCobro_cobroId_fkey` FOREIGN KEY (`cobroId`) REFERENCES `Cobro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CuentaFinanciera` ADD CONSTRAINT `CuentaFinanciera_cuentaContableId_fkey` FOREIGN KEY (`cuentaContableId`) REFERENCES `CuentaContable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovimientoFinanciero` ADD CONSTRAINT `MovimientoFinanciero_cuentaFinancieraId_fkey` FOREIGN KEY (`cuentaFinancieraId`) REFERENCES `CuentaFinanciera`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AsientoMovimiento` ADD CONSTRAINT `AsientoMovimiento_asientoId_fkey` FOREIGN KEY (`asientoId`) REFERENCES `Asiento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AsientoMovimiento` ADD CONSTRAINT `AsientoMovimiento_movimientoFinancieroId_fkey` FOREIGN KEY (`movimientoFinancieroId`) REFERENCES `MovimientoFinanciero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PeriodoContable` ADD CONSTRAINT `PeriodoContable_ejercicioId_fkey` FOREIGN KEY (`ejercicioId`) REFERENCES `Ejercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asiento` ADD CONSTRAINT `Asiento_ejercicioId_fkey` FOREIGN KEY (`ejercicioId`) REFERENCES `Ejercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asiento` ADD CONSTRAINT `Asiento_periodoContableId_fkey` FOREIGN KEY (`periodoContableId`) REFERENCES `PeriodoContable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LineaAsiento` ADD CONSTRAINT `LineaAsiento_asientoId_fkey` FOREIGN KEY (`asientoId`) REFERENCES `Asiento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LineaAsiento` ADD CONSTRAINT `LineaAsiento_cuentaContableId_fkey` FOREIGN KEY (`cuentaContableId`) REFERENCES `CuentaContable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LineaAsiento` ADD CONSTRAINT `LineaAsiento_centroAnaliticoId_fkey` FOREIGN KEY (`centroAnaliticoId`) REFERENCES `CentroAnalitico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
