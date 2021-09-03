CREATE TABLE
IF NOT EXISTS CATEGORIA
(
  id INT
(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  categoria VARCHAR
(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
IF NOT EXISTS `producto`
(
  id int
(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,

  title varchar
(255) NOT NULL,
  price int
(11) NOT NULL,
id_category int
(11) NOT NULL,
description varchar
(255) NOT NULL,
image varchar
(255) NOT NULL,
  FOREIGN KEY
(id_category) REFERENCES CATEGORIA
(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
IF NOT EXISTS `user`
(
  id int
(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,

  usernmae varchar
(255) NOT NULL,
  name varchar
(255) NOT NULL,
  lastname varchar
(255) NOT NULL,
  contact varchar
(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



DELIMITER //
create procedure create_producto (
  IN titleP varchar
(255),
  IN descriptionP varchar
(255),
  IN id_categoryP int,
  IN priceP int,
  IN imageP varchar
(255))
BEGIN
    insert into producto
        (title, description, id_category, price, image)
    values
        (titleP, descriptionP, id_categoryP, priceP, imageP);
END
//
