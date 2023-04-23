-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `container` (
    `id` VARCHAR(191) NOT NULL,
    `containerNo` VARCHAR(255) NOT NULL,
    `size` VARCHAR(255) NOT NULL,
    `operatorId` VARCHAR(255) NULL,
    `manufacturerDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `containerType` ENUM('TWENTY_FEET', 'FOUTY_FEET') NOT NULL DEFAULT 'TWENTY_FEET',
    `oneDayCharges` DOUBLE NOT NULL DEFAULT 0,
    `grade` VARCHAR(255) NULL,
    `standard` VARCHAR(255) NULL,
    `vessel` VARCHAR(255) NULL,
    `voyage` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `container_containerNo_key`(`containerNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consignee` (
    `id` VARCHAR(191) NOT NULL,
    `consigneeName` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `consignee_consigneeName_key`(`consigneeName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operator` (
    `id` VARCHAR(191) NOT NULL,
    `operatorName` VARCHAR(255) NOT NULL,
    `credit` DOUBLE NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `operator_operatorName_key`(`operatorName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shipper` (
    `id` VARCHAR(191) NOT NULL,
    `shipperName` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `shipper_shipperName_key`(`shipperName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eir` (
    `id` VARCHAR(191) NOT NULL,
    `eirNo` VARCHAR(255) NOT NULL,
    `status` ENUM('GATE_IN', 'GATE_OFF') NOT NULL DEFAULT 'GATE_IN',
    `containerId` VARCHAR(255) NULL,
    `inDate` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `outDate` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `operatorId` VARCHAR(255) NULL,
    `shipperId` VARCHAR(255) NULL,
    `vessel` VARCHAR(255) NULL,
    `voyage` VARCHAR(255) NULL,
    `grossWeight` BIGINT NOT NULL DEFAULT 0,
    `tareWeight` BIGINT NOT NULL DEFAULT 0,
    `netWeight` BIGINT NOT NULL DEFAULT 0,
    `washingCharges` DOUBLE NOT NULL DEFAULT 0,
    `washingStatus` VARCHAR(255) NULL,
    `liftOffCharges` DOUBLE NOT NULL DEFAULT 0,
    `liftOnCharges` DOUBLE NOT NULL DEFAULT 0,
    `gateInTotalCharges` DOUBLE NOT NULL DEFAULT 0,
    `gateOutTotalCharges` DOUBLE NOT NULL DEFAULT 0,
    `billingStatus` ENUM('CHARGE', 'LINE_BILL') NOT NULL DEFAULT 'CHARGE',
    `gateInvehicleInfoId` VARCHAR(255) NULL,
    `gateOutvehicleInfoId` VARCHAR(255) NULL,
    `remark` TEXT NULL,
    `bookingNo` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `eir_eirNo_key`(`eirNo`),
    UNIQUE INDEX `eir_gateInvehicleInfoId_key`(`gateInvehicleInfoId`),
    UNIQUE INDEX `eir_gateOutvehicleInfoId_key`(`gateOutvehicleInfoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gateInvehicleInfo` (
    `id` VARCHAR(191) NOT NULL,
    `vehicelNo` VARCHAR(255) NOT NULL,
    `licenseNo` VARCHAR(255) NOT NULL,
    `driverName` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gateOutvehicleInfo` (
    `id` VARCHAR(191) NOT NULL,
    `vehicelNo` VARCHAR(255) NOT NULL,
    `licenseNo` VARCHAR(255) NOT NULL,
    `driverName` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `yard` (
    `id` VARCHAR(191) NOT NULL,
    `no` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `yard_no_key`(`no`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `yardLocation` (
    `id` VARCHAR(191) NOT NULL,
    `containerId` VARCHAR(255) NULL,
    `yardId` VARCHAR(255) NULL,
    `floor` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `container` ADD CONSTRAINT `container_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `eir` ADD CONSTRAINT `eir_containerId_fkey` FOREIGN KEY (`containerId`) REFERENCES `container`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `eir` ADD CONSTRAINT `eir_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `eir` ADD CONSTRAINT `eir_shipperId_fkey` FOREIGN KEY (`shipperId`) REFERENCES `shipper`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `eir` ADD CONSTRAINT `eir_gateInvehicleInfoId_fkey` FOREIGN KEY (`gateInvehicleInfoId`) REFERENCES `gateInvehicleInfo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `eir` ADD CONSTRAINT `eir_gateOutvehicleInfoId_fkey` FOREIGN KEY (`gateOutvehicleInfoId`) REFERENCES `gateOutvehicleInfo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yardLocation` ADD CONSTRAINT `yardLocation_containerId_fkey` FOREIGN KEY (`containerId`) REFERENCES `container`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yardLocation` ADD CONSTRAINT `yardLocation_yardId_fkey` FOREIGN KEY (`yardId`) REFERENCES `yard`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
