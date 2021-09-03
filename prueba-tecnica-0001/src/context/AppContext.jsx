import https from "./http-common";

const getAll = () => {
  return https.get("/products");
};

const getOther = (url) => {
  return https.get(url);
};

const create = (title, data) => {
  return https.post(
    `/products
    
    ${title}?doc=${data.cedula}&email=${data.email}&name=${data.name}&lastName=${data.lastname}&id_program=${data.acaProgram}&semester=${data.semester}&contact=${data.contacto}`
  );
};
const update = (title, id, data) => {
  return https.put(
    `http://0.0.0.0:3001/${title}/${id}?doc=${data.cedula}&email=${data.email}&name=${data.name}&lastName=${data.lastname}&id_program=${data.acaProgram}&semester=${data.semester}&contact=${data.contacto}`
  );
};

const remove = (title, id) => {
  return https.delete(`http://0.0.0.0:3001/${title}/${id}`);
};

const removeAll = (title) => {
  return https.delete(`http://0.0.0.0:3001/${title}`);
};

const findById = (id, dato) => {
  return https.get(`/products/${id}`);
};

const findByCategories = () => {
    return https.get(`/products/${id}`);
  };
export default {
  getAll,
  getOther,
  create,
  update,
  remove,
  removeAll,
  findById,
};
