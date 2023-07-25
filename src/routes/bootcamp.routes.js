import express from "express";
import{createBootcamp, addUser, findById, findAll} from "../controllers/bootcamp.controller.js"
import { verifyToken} from "../middlewares/auth.middleware.js"

const router = express.Router();

//endpoint bootcamp:
router.post("/", verifyToken, createBootcamp);//Crea un bootcamp, acceso por medio de token, previamente iniciado sesión
router.post("/adduser", verifyToken, addUser);//Agrega usuarios previamente registrados al bootcamp, acceso por medio de token, previamente iniciado sesión
router.get("/:id", verifyToken, findById);//Obtiene información de un bootcamp según id, y muestra los usuarios registrados en el bootcamp. Acceso por medio de token, previamente iniciado sesión
router.get("/", findAll);//Lista todos los bootcamp, acceso público

export default router;