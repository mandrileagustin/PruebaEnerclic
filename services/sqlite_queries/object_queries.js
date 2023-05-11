import db from "../sqlite.js";

const objectQueries = {};

objectQueries.addObject = async (objectData) => {
  return new Promise((resolve, reject) => {
    const { nombre, padre, tipo, numserie } = objectData;

    db.run(
      "INSERT INTO objects (nombre, padre, tipo, numserie) VALUES (?, ?, ?, ?)",
      [nombre, padre, tipo, numserie],
      function (err) {
        if (err) {
          console.error("Error al insertar objecto:", err);
          reject(err);
        } else {
          console.log(`Objeto agregado con ID: ${this.lastID}`);
          resolve(this.lastID);
        }
      }
    );
  });
};

objectQueries.getAllObjects = () => {
  return new Promise((resolve, reject) => {
    const query = `
        SELECT * FROM objects
      `;

    db.all(query, (error, rows) => {
      db.close();

      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
};

export default objectQueries;
