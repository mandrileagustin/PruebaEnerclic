import user_controller from "../controller/user_controller.js";
import express from "express";
import validateLogin from "../cookies/validate_login.js";

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints para gestionar usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del usuario
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 */

/**
 * @swagger
 * /addUser:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario en la base de datos.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error interno del servidor
 */
userRouter.post("/addUser", user_controller.createUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Inicia sesión
 *     description: Inicia sesión con las credenciales proporcionadas.
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
userRouter.post("/login", validateLogin, user_controller.login);

export default userRouter;
