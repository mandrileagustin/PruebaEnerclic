import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user_routes.js";
import objectRouter from "./routes/object_routes.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
      description: "Documentación de la API",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", userRouter);
app.use("/objects", objectRouter);

app.listen(port, () => {
  console.log(`Servidor API en funcionamiento en el puerto ${port}`);
});

export default app;
