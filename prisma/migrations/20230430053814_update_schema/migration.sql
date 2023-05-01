/*
  Warnings:

  - You are about to drop the column `vehicelNo` on the `gateInvehicleInfo` table. All the data in the column will be lost.
  - You are about to drop the column `vehicelNo` on the `gateOutvehicleInfo` table. All the data in the column will be lost.
  - Added the required column `vehicleNo` to the `gateInvehicleInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleNo` to the `gateOutvehicleInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gateInvehicleInfo` DROP COLUMN `vehicelNo`,
    ADD COLUMN `vehicleNo` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `gateOutvehicleInfo` DROP COLUMN `vehicelNo`,
    ADD COLUMN `vehicleNo` VARCHAR(255) NOT NULL;
