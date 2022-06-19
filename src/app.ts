import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { routes } from "./routes";
import swaggerFile from "./swagger.json";

import "./shared/container";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

export { app };
