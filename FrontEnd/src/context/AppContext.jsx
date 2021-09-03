import https from "./http-common";

const getAll = (title) => {
  return https.get(`/${title}`);
};

const create = (title, data) => {
  return https.post(
    `/${title}`, data
  );
};
const update = (title, id, data) => {
  return https.put(
    `/${title}/${id}`,data
  );
};

const remove = (title, id) => {
  return https.delete(`/${title}/${id}`);
};

const findById = (title, id, dato) => {
  return https.get(`/${title}/${id}`);
};


export default {
  getAll,
  create,
  update,
  remove,
  findById,
};
