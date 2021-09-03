const sql = require("../db/db");

// constructor
const Producto = function (Producto) {
  this.doc = Producto.doc;
  this.email = Producto.email;
  this.name = Producto.name;
  this.lastName = Producto.lastName;
  this.id_program = Producto.id_program;
  this.semester = Producto.semester;
  this.contact = Producto.contact;
};

Producto.create = (newProducto, result) => {
  sql.query(
    "call create_Producto (?,?,?,?,?)",
    [
      newProducto.title,
      newProducto.description,
      newProducto.id_category,
      newProducto.price,
      newProducto.image,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Producto: ", { id: res.insertId, ...newProducto });
      result(null, { id: res.insertId, ...newProducto });
    }
  );
};

Producto.findById = (ProductoId, result) => {
  sql.query(`SELECT * FROM Producto WHERE id = ${ProductoId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Producto: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Producto with the id
    result({ kind: "not_found" }, null);
  });
};

Producto.getAll = (result) => {
  sql.query("call allProducto()", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Productos: ", res);
    result(null, res);
  });
};

Producto.updateById = (id, Producto, result) => {
  sql.query(
    "UPDATE Producto SET title = ?, id_category = ?, price = ?, description = ?, image WHERE id = ?",
    [Producto.doc, Producto.email, Producto.name, Producto.lastName, Producto.id_program, Producto.semester, Producto.contact, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Producto with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Producto: ", { id: id, ...Producto });
      result(null, { id: id, ...Producto });
    }
  );
};

Producto.remove = (id, result) => {
  sql.query("DELETE FROM Producto WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Producto with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Producto with id: ", id);
    result(null, res);
  });
};

module.exports = Producto;
