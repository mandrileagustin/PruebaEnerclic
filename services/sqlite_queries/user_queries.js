import db from "../sqlite.js";

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.get(query, [email], (error, row) => {
      if (error) {
        reject(error);
      } else {
        resolve(row);
      }
    });
  });
};

userQueries.createUser = async (userData) => {
  console.log(userData);
  return new Promise((resolve, reject) => {
    const { nombre, email, password } = userData;

    db.run(
      "INSERT INTO users (nombre, email, password) VALUES (?, ?, ?)",
      [nombre, email, password],
      function (err) {
        if (err) {
          console.error("Error al insertar usuario:", err);
          reject(err);
        } else {
          console.log(`Usuario agregado con ID: ${this.lastID}`);
          resolve(this.lastID);
        }
      }
    );
  });
};

export default userQueries;
