DROP DATABASE IF EXISTS `bamazon`;

CREATE DATABASE `bamazon`;

USE `bamazon`;

CREATE TABLE IF NOT EXISTS `bamazon_store` (
`item_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
`product_name` VARCHAR(50) NOT NULL,
`department_name` varchar(20) NOT NULL,
`price` DECIMAL(10, 2) NOT NULL,
`stock_quantity` INT(10),
PRIMARY KEY (`item_id`)
);


SELECT * FROM `bamazon_store`;


