/*
  Warnings:

  - You are about to drop the column `grade` on the `container` table. All the data in the column will be lost.
  - You are about to drop the column `standard` on the `container` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `container` DROP COLUMN `grade`,
    DROP COLUMN `standard`;

-- AlterTable
ALTER TABLE `eir` ADD COLUMN `grade` VARCHAR(255) NULL,
    ADD COLUMN `standard` VARCHAR(255) NULL;
