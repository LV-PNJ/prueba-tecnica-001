const sql = require("../db/db");

// constructor
const Producto = function (Producto) {
  this.title = Producto.title;
  this.description = Producto.description;
  this.price = Producto.price;
  this.image = Producto.image;
  this.id_category = Producto.id_category;

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
    "UPDATE Producto SET title = ?, id_category = ?, price = ?, description = ?, image= ? image WHERE id = ?",
    [Producto.title, Producto.id_category, Producto.price, Producto.description, Producto.image, id],
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
