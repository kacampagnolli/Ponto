-- MySQL Script generated by MySQL Workbench
-- Wed Nov 22 20:37:52 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema Ponto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Ponto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Ponto` DEFAULT CHARACTER SET utf8 ;
USE `Ponto` ;

-- -----------------------------------------------------
-- Table `Ponto`.`Categorias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ponto`.`Categorias` ;

CREATE TABLE IF NOT EXISTS `Ponto`.`Categorias` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DESCRICAO` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ponto`.`Usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ponto`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `Ponto`.`Usuarios` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(50) NOT NULL,
  `SENHA` VARCHAR(100) NOT NULL,
  `DATA` DATETIME NOT NULL,
  `STATUS` VARCHAR(10) NOT NULL,
  `CATEGORIA` INT NOT NULL,
  `BANCO_HORAS` DATETIME NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `FK_USUARIO_CATEGORIA_idx` (`CATEGORIA` ASC),
  CONSTRAINT `FK_USUARIO_CATEGORIA`
    FOREIGN KEY (`CATEGORIA`)
    REFERENCES `Ponto`.`Categorias` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ponto`.`Acoes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ponto`.`Acoes` ;

CREATE TABLE IF NOT EXISTS `Ponto`.`Acoes` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DESCRICAO` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ponto`.`Categoria_Acoes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ponto`.`Categoria_Acoes` ;

CREATE TABLE IF NOT EXISTS `Ponto`.`Categoria_Acoes` (
  `ID_CATEGORIA` INT NOT NULL,
  `ID_ACOE` INT NOT NULL,
  PRIMARY KEY (`ID_CATEGORIA`, `ID_ACOE`),
  INDEX `FK_CATEGORIA_ACOES_ACOES_idx` (`ID_ACOE` ASC),
  CONSTRAINT `FK_CATEGORIA_ACOES_CATEGORIA`
    FOREIGN KEY (`ID_CATEGORIA`)
    REFERENCES `Ponto`.`Categorias` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CATEGORIA_ACOES_ACOES`
    FOREIGN KEY (`ID_ACOE`)
    REFERENCES `Ponto`.`Acoes` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ponto`.`Equipe`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ponto`.`Equipe` ;

CREATE TABLE IF NOT EXISTS `Ponto`.`Equipe` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DESCRICAO` VARCHAR(100) NOT NULL,
  `MAX_HORA_ENTRADA` DATETIME NOT NULL,
  `HORA_ALMOCO` DATETIME NOT NULL,
  `QTD_DIAS_ALTERACAO` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ponto`.`USUARIO_EQUIPE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ponto`.`USUARIO_EQUIPE` ;

CREATE TABLE IF NOT EXISTS `Ponto`.`USUARIO_EQUIPE` (
  `ID_USUARIO` INT NOT NULL,
  `ID_EQUIPE` INT NOT NULL,
  PRIMARY KEY (`ID_USUARIO`, `ID_EQUIPE`),
  INDEX `USUARIO_EQUIPE_EQUIPE_idx` (`ID_EQUIPE` ASC),
  CONSTRAINT `USUARIO_EQUIPE_USUARIO`
    FOREIGN KEY (`ID_USUARIO`)
    REFERENCES `Ponto`.`Usuarios` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `USUARIO_EQUIPE_EQUIPE`
    FOREIGN KEY (`ID_EQUIPE`)
    REFERENCES `Ponto`.`Equipe` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ponto`.`DIAS_TRABALHO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ponto`.`DIAS_TRABALHO` ;

CREATE TABLE IF NOT EXISTS `Ponto`.`DIAS_TRABALHO` (
  `ID_USUARIO` INT NOT NULL,
  `DIA_ENTRADA` DATE NOT NULL,
  `ENTRADA` DATETIME NULL,
  `SAIDA_ALMOCO` DATETIME NULL,
  `VOLTA_ALMOCO` DATETIME NULL,
  `SAIDA` DATETIME NULL,
  `BANCO_HORA` DATETIME NULL,
  `HORA_EXTRA` DATETIME NULL,
  `PERMITE_BANCO_HORA` TINYINT NULL,
  `PERMITE_HORA_EXTRA` TINYINT NULL,
  `OBSERVACAO` VARCHAR(255) NULL,
  PRIMARY KEY (`ID_USUARIO`, `DIA_ENTRADA`),
  CONSTRAINT `DIAS_TRABALHADO_USUARIO`
    FOREIGN KEY (`ID_USUARIO`)
    REFERENCES `Ponto`.`Usuarios` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
