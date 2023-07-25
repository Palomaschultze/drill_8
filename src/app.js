import express from "express";
import upload from "express-fileupload";
import cors from "cors";
import morgan from "morgan";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//importaciones de rutas
import usersRoutes from "./routes/users.routes.js";
import bootcampsRoutes from "./routes/bootcamp.routes.js"



const app = express();

//middlewares generales

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());


//rutas de endpoints

app.use("/api", usersRoutes);
app.use("/api/bootcamp", bootcampsRoutes);



export default app;
