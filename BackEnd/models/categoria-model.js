const sql = require("../db/db.js");

// constructor
// constructor
const Categoria = function (Categoria) {
  this.idMonitor = Monitor.idMonitor;
  this.idCategoria = Monitor.idCategoria;
  this.subject = Monitor.subject;
  this.salon = Monitor.salon;
  this.fecha = Monitor.fecha;
};

Categoria.create = (idMonitor, idCategoria, subject, salon, fecha, result) => {
  sql.query("call create_monitor_Categoria (?,?,?,?,?)", [idMonitor, idCategoria, subject, salon, fecha], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Categoria: ", { id: res.insertId, ...idMonitor, ...idCategoria });
    result(null, { id: res.insertId, ...idMonitor, ...idCategoria });
  });
};

Categoria.findById = (CategoriaId, result) => {
  sql.query(`SELECT * FROM Categoria WHERE id = ${CategoriaId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Categoria: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Categoria with the id
    result({ kind: "not_found" }, null);
  });
};

Categoria.getAll = result => {
  sql.query("call allCategoria()", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Categorias: ", res);
    result(null, res);
  });
};

Categoria.updateById = (id, Categoria, result) => {
  sql.query(
    "update_monitor_Categoria (?, ?, ?, ?, ?)",
    [Categoria.idCategoria, Categoria.idMonitor, Categoria.subject, Categoria.salon, Categoria.fecha, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Categoria with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Actualizada Categoria: ", { id: id, ...Categoria });
      result(null, { id: id, ...Categoria });
    }
  );
};

Categoria.remove = (id, result) => {
  sql.query("DELETE FROM Categoria WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Categoria with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Categoria eliminada id: ", id);
    result(null, res);
  });
};


module.exports = Categoria;