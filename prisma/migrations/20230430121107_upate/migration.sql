/*
  Warnings:

  - You are about to alter the column `grossWeight` on the `eir` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `tareWeight` on the `eir` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `netWeight` on the `eir` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `eir` MODIFY `grossWeight` INTEGER NOT NULL DEFAULT 0,
    MODIFY `tareWeight` INTEGER NOT NULL DEFAULT 0,
    MODIFY `netWeight` INTEGER NOT NULL DEFAULT 0;
