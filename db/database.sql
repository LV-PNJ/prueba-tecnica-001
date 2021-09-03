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




DELIMITER //
create procedure create_producto (
  IN docP int,
  IN emailP varchar
(255),
  IN nameP varchar
(255),
  IN lastnameP varchar
(255),
  IN id_programP int,
  IN semesterP int,
  IN contactP varchar
(255))
BEGIN
    insert into producto
        (doc, email, name, lastname, id_program, semester, contact)
    values
        (docP, emailP, nameP, lastnameP, id_programP, semesterP, contactP);
END
//

create procedure create_program
  (IN idP int,
  IN acaProgramP varchar
(255))
BEGIN
    insert into producto
        (acaProgram)
    values
        (acaProgramP);
END
//

create procedure allcategoria
  ()
BEGIN
select monm.id, concat(m.name,' ',m.lastname) as producto, mon.salon, mon.materia, mon.fecha
    from categoria mon 
    INNER JOIN producto_categoria monm 
    ON mon.id = monm.categoria_id
    INNER JOIN producto m 
    ON m.id = monm.producto_id;
END
//

create procedure allproducto
  ()
BEGIN
    select *
    from producto;
END
//

call allcategoria
();

call allproducto
();

create procedure create_producto_categoria
  (IN idP int,
  IN categoria_idP int,
  IN materiaP varchar
(255),
  IN salonP varchar
(255),
  IN fechaP varchar
(255))
BEGIN
    insert into categoria
        (materia, fecha, salon)
    values
        (materiaP, fechaP, salonP);
    insert into producto_categoria
        (producto_id, categoria_id)
    values
        (idP, categoria_idP);
END
//

call create_producto_categoria (2,1,"Programación", "A11", "Miercoles")

create procedure delete_producto_categoria
  (IN idP int,
  IN categoria_idP int)
BEGIN
    delete from categoria where id=idP;
    delete from producto_categoria where categoria_id=categoria_idP and producto_id=idP;
END
//

insert into PROGRAMA (acaProgram) values ("Ingenieria informatica")//
insert into producto (doc, email, name, lastname, id_program, semester, contact) values (1233909119, "harrietaruiz19@outlook.com", "Hilder", "Arrieta", 1, 10, "3022976002")//

create procedure update_producto_categoria
  (IN idP int,
  IN categoria_idP int,
  IN materiaP varchar
(255),
  IN salonP varchar
(255),
  IN fechaP varchar
(255))
BEGIN

UPDATE categoria SET materia = materiaP, fecha = fechaP, salon = salonP WHERE id = categoria_idP;
UPDATE producto_categoria SET producto_id=idP, categoria_id=categoria_idP WHERE id = categoria_idP;
END//

call update_producto_categoria (2, 1, "Axul", "A45", "Jueves")

