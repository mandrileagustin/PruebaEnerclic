import dao from "../services/dao.js";
import { SignJWT } from "jose";
import md5 from "md5";

const controller = {};

controller.createUser = async (req, res) => {
  const { nombre, email, password } = req.body;
  console.log(req.body);

  if (!nombre || !email || !password)
    return res.status(400).send("Error al recibir el body");

  try {
    const userEmailCheck = await dao.getUserByEmail(email);
    if (userEmailCheck) {
      return res.status(400).send("El email ya está registrado");
    }

    const passwordEncripted = md5(password);
    const user = { nombre, email, password: passwordEncripted };

    const addUser = await dao.createUser(user);
    if (addUser) return res.sendStatus(200);
  } catch (error) {
    console.log("Error al agregar usuario", error);
    res.status(500).send("Error al agregar usuario");
  }
};

controller.login = async (req, res) => {
  const { email, password } = req.body;

  console.log(process.env.JWT_SECRET);
  if (!email || !password) {
    return res.status(400).send("Error al recibir el body");
  }

  try {
    let user = await dao.getUserByEmail(email);

    if (user.length <= 0) {
      return res.status(404).send("Usuario no registrado");
    }

    const clientPassword = md5(password);
    const { id } = user;

    if (user.password !== clientPassword) {
      return res.status(401).send("Contraseña incorrecta");
    }

    const jwtConstructor = new SignJWT({
      id,
      email,
    });

    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("48h")
      .sign(encoder.encode(process.env.JWT_SECRET));

    return res.send({ jwt });
  } catch (error) {
    console.log(error.message);
    console.error(error.stack);
    return res.status(500).send("Error al realizar el login");
  }
};

export default controller;
