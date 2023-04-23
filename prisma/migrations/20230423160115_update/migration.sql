/*
  Warnings:

  - You are about to drop the column `grade` on the `eir` table. All the data in the column will be lost.
  - You are about to drop the column `standard` on the `eir` table. All the data in the column will be lost.
  - You are about to drop the column `totalCharges` on the `eir` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `container` ADD COLUMN `grade` VARCHAR(255) NULL,
    ADD COLUMN `standard` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `eir` DROP COLUMN `grade`,
    DROP COLUMN `standard`,
    DROP COLUMN `totalCharges`,
    ADD COLUMN `bookingNo` VARCHAR(255) NULL,
    ADD COLUMN `shipperId` VARCHAR(255) NULL,
    MODIFY `vessel` VARCHAR(255) NULL,
    MODIFY `voyage` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `shipper` (
    `id` VARCHAR(191) NOT NULL,
    `shipperName` VARCHAR(255) NOT NULL,
    `credit` BIGINT NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `shipper_shipperName_key`(`shipperName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `eir` ADD CONSTRAINT `eir_shipperId_fkey` FOREIGN KEY (`shipperId`) REFERENCES `shipper`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
