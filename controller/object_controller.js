import dao from "../services/dao.js";

const controller = {};

controller.addObject = async (req, res) => {
  const { nombre, padre, tipo, numserie } = req.body;
  console.log(req.body);

  if (!nombre || !padre || !tipo || !numserie)
    return res.status(400).send("Error al recibir el body");

  try {
    const objectData = { nombre, padre, tipo, numserie };
    const addObject = await dao.addObject(objectData);
    if (addObject) return res.sendStatus(200);
  } catch (error) {
    console.log("Error al agregar el objecto", error);
    res.status(500).send("Error al agregar el objeto");
  }
};

controller.getAllObjects = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return res.sendStatus(401);
  try {
    const objects = await dao.getAllObjects();

    const data = {};

    objects.forEach((obj) => {
      const { id, nombre, padre, tipo, numserie } = obj;

      data[id] = {
        id,
        nombre,
        padre,
        tipo,
        numserie,
        children: [],
      };
    });

    const ordenJerarquico = {};

    Object.values(data).forEach((obj) => {
      const { id, nombre, padre, tipo, numserie } = obj;

      if (padre === null || padre === "null") {
        ordenJerarquico[id] = obj;
      } else if (data[padre]) {
        data[padre].children.push(obj);
      }
    });

    res.json(ordenJerarquico);
  } catch (error) {
    console.error("Error al obtener los objetos:", error);
    res.status(500).send("Error al obtener los objetos");
  }
};

export default controller;
