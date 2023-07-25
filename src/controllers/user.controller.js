import User from "../models/user.model.js";
import Bootcamp from "../models/bootcamp.model.js";


//Crear y guardar usuarios llamado createUser.
export const createUser = async (req, res)=>{
    try {
       let {firstName, lastName, email, password} = req.body;
       const [user, created]= await User.findOrCreate({
        where:{email},
        defaults:{
            firstName,
            lastName,
            email,
            password,
        },
       });

       if (!created){
        return res.status(400).send({code:400, message: `El usuario que intenta crear con email (${user.email}) ya existe.` })
       }
       res.status(201).send({
        code: 201,
        message: `Usuario ${user.firstName}, con ID: ${user.id} creado con éxito.`,
    });
    } catch (error) {
        console.log(error)
        res.status(500).send({ code: 500, message: error.message });       
    }
}

//login
export const login = async (req, res) => {
  res.json({ code: 200, message: "Login correcto.", token: req.token });
};

//Obtener los Bootcamp de un usuario llamado findUserById.
export const findUserById = async (req, res) => {
    try {
        let id = req.params.id;
        console.log(id)

        let user = await User.findOne({
            where: { id },
            attributes: ['firstName', 'lastName', 'email'],
            include:{
                model :Bootcamp,
                as:'bootcamps',
                through: {
                    attributes: []
                },
                attributes:["id", "title", "cue", "description"]
            }
        })

        console.log(user);

        if (!user) {
            return res
                .status(404)
                .send({ code: 404, message: "Usuario no encontrado" });
        }

        res.status(200).send({
            code: 200,
            data: user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ code: 500, message: error.message });
    }
};


//Obtener todos los Usuarios incluyendo, los Bootcamp llamado findAll
export const findAll = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes:[ 'id', 'firstName', 'lastName', 'email'],
            include: [
                {
                    model: Bootcamp,
                    as: "bootcamps",
                    through: {attributes: []},
                    attributes:["id", "title", "cue", "description"]
                },
            ],
            where:{status:true}
        });
        res.send({ code: 200, data: users });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: "Error al consultar los usuarios." +error,
        });
    }
};


//Actualizar usuario por Id llamado updateUserById
export const updateUserById = async (req, res) => {
    try {
        let{id}= req.params
      let { firstName, lastName, email } = req.body;
      let user = await User.findByPk(id)
      if (user) {
        let updatedUser = await User.update(
          {
            id, firstName, lastName, email
          },
          { where: { id: id } }
          );
        return res.status(201).send(` Usuario con ID: ${updatedUser} modificado exitosamente`)
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({
        code: 500,
        message: error.message
      })
    }
}  

//Borrar a travez de update (los deja inactivos)
export const changeStatus = async (req, res) => {
    try {
      let { id } = req.params;
      let {status} = req.body
      await User.update(
        {status},
        {where: {id}}
        )
      res.status(201).send(`Usuario con ID: ${id} eliminado con éxito`)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        code: 500,
        message: error.message
      })
    }
  }


//Eliminar un usuario por Id llamado deleteUserById
export const deleteUserById = async (req, res) => {
    try {
      let { id } = req.params;
      await User.destroy({
        where: {id}
      })
      res.status(201).send(`Usuario con ID: ${id} destruido con éxito`)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        code: 500,
        message: error.message
      })
    }
  }