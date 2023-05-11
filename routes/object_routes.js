import object_controller from "../controller/object_controller.js";
import express from "express";

const objectRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     object:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         nombre:
 *           type: string
 *         padre:
 *           type: string
 *         tipo:
 *           type: number
 *         numserie:
 *           type: string
 */

/**
 * @swagger
 * /objects/addObject:
 *   post:
 *     summary: Agrega un objeto
 *     description: Agrega un nuevo objeto a la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/object'
 *     responses:
 *       200:
 *         description: Objeto agregado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error interno del servidor
 */
objectRouter.post("/addObject", object_controller.addObject);

/**
 * @swagger
 * /objects/getAllObjects:
 *   get:
 *     summary: Obtiene todos los objetos
 *     description: Obtiene una lista de todos los objetos de la base de datos.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/object'
 *       500:
 *         description: Error interno del servidor
 */
objectRouter.get("/getAllObjects", object_controller.getAllObjects);

export default objectRouter;
