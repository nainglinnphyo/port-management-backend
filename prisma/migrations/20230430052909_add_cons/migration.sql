-- AlterTable
ALTER TABLE `eir` ADD COLUMN `consigneeId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `eir` ADD CONSTRAINT `eir_consigneeId_fkey` FOREIGN KEY (`consigneeId`) REFERENCES `consignee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
