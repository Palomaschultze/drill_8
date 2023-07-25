import { Router } from "express";
import{createUser, findUserById, findAll, updateUserById, changeStatus, deleteUserById, login} from "../controllers/user.controller.js"
import {emitToken, verifyToken} from "../middlewares/auth.middleware.js"
import { validateEmail } from "../middlewares/verifySignUp.js";


const router = Router();

//endpoint user:
router.post("/signup", createUser); //Registro de una nuevo usuario, acceso público
router.post("/signin",validateEmail, emitToken, login);//Inicio de sesión en la API, acceso público
router.get("/user/:id", verifyToken, findUserById);//Lista información del usuario según id, acceso por medio de token, previamente iniciado sesión
router.get("/user/", verifyToken, findAll); //Lista información de todos los usuarios y los Bootcamp registrados, acceso por medio de token, previamente iniciado sesión
router.put("/user/:id", verifyToken, updateUserById)//Actualiza los campos de firstName y lastName de un usuario según su id, acceso por medio de token, previamente iniciado sesión
router.delete("/user/:id", verifyToken, changeStatus)//Elimina (por status) el usuario según id, acceso por medio de token, previamente iniciado sesión
router.delete("/user/destroy/:id", verifyToken, deleteUserById)//Destruye el usuario de la bd según id, acceso por medio de token, previamente iniciado sesión


export default router;
