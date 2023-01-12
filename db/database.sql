CREATE DATABASE IF NOT EXISTS pegasodb;

USE pegasodb;

CREATE TABLE empleados (
    idEmpleado INT (11) NOT NULL AUTO_INCREMENT,
    nombreE VARCHAR (45) DEFAULT NULL,
    salarioE INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
    (1,'joe',1000),
    (2,'henry',2000),
    (3, 'sam',2500),
    (4, 'max',1500);

CREATE TABLE productos (
    idProdcuto INT (10) NOT NULL AUTO_INCREMENT,
    productoE VARCHAR (20) DEFAULT NULL,
    costoE INT(5) DEFAULT NULL,
    PRIMARY KEY (idProdcuto)
);

INSERT INTO productos VALUES
    (1,'libreta',15),
    (2,'lapiz',4),
    (3,'tijera',12),
    (4,'sacapuntas',3);

CREATE TABLE ventas (
    idVenta INT (10) NOT NULL AUTO_INCREMENT,    
    idProducto INT (10) NOT NULL,
    precioE INT(5) NOT NULL,
    PRIMARY KEY (idVenta)
);

INSERT INTO ventas VALUES
    (1,1,15),
    (2,2,4),
    (3,1,12),
    (4,2,10);