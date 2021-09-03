const sql = require("../db/db");

// constructor
const Subject = function(Subject) {
  this.name = Subject.name;
};

Subject.create = (newSubject, result) => {
  sql.query("INSERT INTO user SET ?", newSubject, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Subject: ", { id: res.insertId, ...newSubject });
    result(null, { id: res.insertId, ...newSubject });
  });
};

Subject.findById = (SubjectId, result) => {
  sql.query(`SELECT * FROM user WHERE id = ${SubjectId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Subject: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Subject with the id
    result({ kind: "not_found" }, null);
  });
};

Subject.getAll = result => {
  sql.query("call allSubject()", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Subjects: ", res);
    result(null, res);
  });
};

Subject.updateById = (id, Subject, result) => {
  sql.query(
    "UPDATE Subjects SET email = ?, name = ?, active = ? WHERE id = ?",
    [Subject.email, Subject.name, Subject.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Subject with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Subject: ", { id: id, ...Subject });
      result(null, { id: id, ...Subject });
    }
  );
};

Subject.remove = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};


module.exports = Subject;