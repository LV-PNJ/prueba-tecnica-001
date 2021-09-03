module.exports = app => {
    const sistema = require("../controllers/siga-controller.js");
  
    // Create a new producto
    app.post("/producto", sistema.create);
  
    // Retrieve all productos
    app.get("/allproducto", sistema.findAll);
  
    // Update a producto with productoId
    app.put("/producto/:productoId", sistema.update);
  
    // Delete a producto with productoId
    app.delete("/producto/:productoId", sistema.deleteM);
  
    // Create a new categoria
    app.post("/categoria", sistema.createcategoria);

    // Retrieve all categoria
    app.get("/allcategoria", sistema.getcategoria);

    // Update a categoria with categoriaId
    app.put("/categoria/:categoriaId", sistema.updatecategoria);
  
    // Delete a categoria with categoriaId
    app.delete("/categoria/:categoriaId", sistema.deletecategoria);
  };