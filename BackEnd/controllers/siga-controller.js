const Monitor = require("../models/producto-model");
const Categoria = require("../models/categoria-model");

// Create and Save a new Monitor
create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "¡Contenido no puede estar vacio!"
    });
  }
 console.log(req.body)
 const monitor = new ({
  doc: req.query.doc,
  email: req.query.email,
  name: req.query.name,
  lastName: req.query.lastName,
  id_program: req.query.id_program,
  username: req.query.semester,
  contact: req.query.contact
});

  // Save productoia in the database
 Producto.create(producto, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error."
      });
    else res.send(data);
  });
};

// Retrieve all productos from the database.
findAll = (req, res) => {
  producto.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving info."
      });
    else res.send(data);
  });
  };

// Find a single producto with a productoId

// Update a producto identified by the productoId in the request
update = (req, res) => {
  // Validate Request
  if (!req.query) {
    res.status(400).send({
      message: "¡Contenido no puede estar vacio!"
    });
  }

  producto.updateById(
    req.params.productoId,
    new producto(req.query),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No encontrada producto con id ${req.params.productoId}.`
          });
        } else {
          res.status(500).send({
            message: "Error actualizando producto con id " + req.params.productoId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a producto with the specified productoId in the request
deleteM = (req, res) => {
  producto.remove(req.params.productoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No encontrado producto con id ${req.params.productoId}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo eliminar producto con id " + req.params.productoId
        });
      }
    } else res.send({ message: `¡producto fue eliminado exitosamente!` });
  });
};


//categorias

createcategoria = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "¡Contenido no puede estar vacio!"
    });
  }
  // Save categoria in the database
  categoria.create(req.query.id_Monitor, req.query.id_categoria, req.query.subject, req.query.salon, req.query.fecha, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error."
      });
    else res.send(data);
  });
};

updatecategoria = (req, res) => {
// Validate Request
if (!req.query) {
  res.status(400).send({
    message: "¡Contenido no puede estar vacio!"
  });
}

categoria.updateById(
  req.params.categoriaId,
  new categoria(req.query),
  (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No categoria encontrada con id ${req.params.categoriaId}.`
        });
      } else {
        res.status(500).send({
          message: "Error actualizando categoria con id " + req.params.categoriaId
        });
      }
    } else res.send(data);
  }
);
};

deletecategoria = (req, res) => {
  categoria.remove(req.params.categoriaId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No encontrado categoria con id ${req.params.categoriaId}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo eliminar categoria con id " + req.params.categoriaId
        });
      }
    } else res.send({ message: `¡categoria fue eliminado exitosamente!` });
  });
};

getcategoria = (req, res) => {
    categoria.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Error."
          });
        else res.send(data);
      });
};

module.exports = {
  createcategoria,
  updatecategoria,
  deletecategoria,
  getcategoria,
  create,
  findAll,
  update,
  deleteM,
  deleteAll,
};
