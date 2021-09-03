import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../context/AppContext";

export default function RegistrarProducto() {
  const [producto, setProducto] = useState(AppContext);
  const [submitted, setSubmitted] = useState(false);
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Correo electrónico inválido";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    },
    validate,
    onSubmit: (values) => {
      AppContext.create("products", JSON.stringify(values))
        .then((response) => {
          setProducto({});
          setSubmitted(true);
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (
    <div className="container">
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Registrar producto
        </Typography>
        <form className="form form-login" onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="title"
                name="title"
                label="Nombre"
                fullWidth
                placeholder="Nombre del producto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="price"
                name="price"
                label="Precio"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="category"
                name="category"
                label="Categoría"
                fullWidth
                autoComplete="family-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Descripcion del producto"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="image"
                name="image"
                label="Imagen del producto"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
              endIcon={<SaveIcon />}
            >
              Continuar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Cancelar
            </Button>
          </Grid>
        </form>
      </React.Fragment>
    </div>
  );
}
