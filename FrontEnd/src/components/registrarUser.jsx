import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../Context/AppContext";

export default function RegistrarProducto() {

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      lastname: "",
      username: "",
      password: "",
      address: "",

    },
    onSubmit: (values) => {
      AppContext.create("products", JSON.stringify(values))
        .then((response) => {
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
             
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Nombre(s)"
                fullWidth
                autoComplete="given-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastname"
                name="lastname"
                label="Apellidos"
                fullWidth
                autoComplete="family-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Correo electrónico"
                fullWidth
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="username"
                name="username"
                label="Nombre de usuario"
                fullWidth
                autoComplete="carrer"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="password"
                fullWidth
                autoComplete="shipping address-level2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Contacto"
                fullWidth
                autoComplete="shipping country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
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
