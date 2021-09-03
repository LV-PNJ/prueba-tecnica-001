CREATE TABLE
IF NOT EXISTS PROGRAMA
(
  id INT
(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  acaProgram VARCHAR
(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
IF NOT EXISTS `producto`
(
  id int
(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  doc int
(11) NOT NULL,
  email varchar
(255) NOT NULL,
  name varchar
(255) NOT NULL,
  lastname varchar
(255) NOT NULL,
  id_program INT
(6) UNSIGNED,
  semester int
(11) NOT NULL,
  contact varchar
(255) NOT NULL,
  FOREIGN KEY
(id_program) REFERENCES PROGRAMA
(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
IF NOT EXISTS `categoria`
(
  id int
(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  materia varchar
(255) NOT NULL,
  fecha varchar
(255) NOT NULL,
  salon varchar
(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
IF NOT EXISTS `producto_categoria`
(
    id int
(11) UNSIGNED AUTO_INCREMENT,
    producto_id int
(11) NOT NULL,
    categoria_id INT
(11) UNSIGNED NOT NULL,
    PRIMARY KEY
(id),
    FOREIGN KEY
(producto_id) REFERENCES producto
(id),
    FOREIGN KEY
(categoria_id) REFERENCES categoria
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

