//autenticacion del usuario
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const emitToken = async (req, res, next) => {
    let { email, password } = req.body;
    let user = await User.findOne({
        where: { email, password },
        attributes: ["id", "firstName", "lastName", "email", "status"],
    });

    if (!user) {
        return res
            .status(400)
            .json({ code: 400, message: "Error de autenticación." });
    }
    let token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: user,
        },
        process.env.PASSWORD_SECRET
    );
    console.log(token);
    req.token = token;
    next();
};

export const verifyToken = (req, res, next) => {
    try {
        let { token } = req.query; //busca el token en el query
        console.log(token);
        if (!token) {
             token = req.headers["authorization"];
             
             token = token.split(" ")[1];
             console.log(token);
             if (token.length == 0) {
                 throw new Error("No se ha proporcionado un token");
             }
        }

        jwt.verify(
            token,
            process.env.PASSWORD_SECRET,
            async (error, decoded) => {
                console.log("decoded", decoded);
                if (error) {
                    return res.status(401).json({
                        code: 401,
                        message:
                            "Debe proporcionar un token válido / Su token puede estar expirado.",
                    });
                }

                try {
                    let user = await User.findByPk(decoded.data.id, {
                        attributes: ["id", "firstName", "lastName", "email", "status"],
                    });
                    if (!user) {
                        return res.status(400).json({
                            code: 400,
                            message: "user ya no existe en el sistema",
                        });
                    }
                    req.user = user;
                    next();
                } catch (error) {
                    res.status(500).json({code: 500, message: "Error en autencicación"})
                }
            }
        );
    } catch (error) {
        return res.status(401).json({
            code: 401,
            message: error.message,
        });
    }
};
