CREATE DATABASE IF NOT EXISTS pegasodb;

USE pegasodb;

CREATE TABLE empleados (
    id INT (11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
    (1,'joe',1000),
    (2,'henry',2000),
    (3, 'sam',2500),
    (4, 'max',1500);



CREATE TABLE productos (
    codigo INT (11) NOT NULL AUTO_INCREMENT,
    producto VARCHAR (45) DEFAULT NULL,
    costo INT(5) DEFAULT NULL,
    PRIMARY KEY (codigo)

);

CREATE TABLE ventas (
    id INT (11) NOT NULL AUTO_INCREMENT,
    vendedor VARCHAR (45) DEFAULT NULL,
    precio INT(5) DEFAULT NULL,
    PRIMARY KEY (id)

);