import Bootcamp from "../models/bootcamp.model.js";
import User from "../models/user.model.js";

//Crear y guardar un nuevo Bootcamp llamado createBootcamp
export const createBootcamp = async (req, res) => {
    try {
      let { title, cue, description } = req.body;
      const [bootcamp, created] = await Bootcamp.findOrCreate({
        where: { title: title },
        defaults: {
          title,
          cue,
          description,
        },
      });
  
      if (created) {
        res.status(201).send({
          code: 201,
          message: `Bootcamp ${bootcamp.title}, con ID: ${bootcamp.id} creado con éxito.`,
        });
      } else {
        res.status(200).send({
          code: 200,
          message: `Bootcamp ${bootcamp.title}, con ID: ${bootcamp.id} ya existe.`,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ code: 500, message: error.message });
    }
  };
  

//Agregar un Usuario al Bootcamp llamado addUser.
export const addUser = async (req, res) => {

    try {
        let { userId, bootcampId } = req.body;

        let user = await User.findByPk(userId);
        let bootcamp = await Bootcamp.findByPk(bootcampId);

        if (!user) {
            return res.status(400).send({
                code: 400,
                message: `El usuario al que intenta vincular al bootcamp no existe,  (ID USUARIO: ${userId})`,
            });
        }

        if (!bootcamp) {
            return res.status(400).send({
                code: 400,
                message: `El bootcamp al que intenta vincular al usuario ${user.firstName} no existe, (ID BOOTCAMP: ${bootcampId})`,
            });
        }

        await user.addBootcamp(bootcamp);

        res.status(201).send({
            code: 201,
            message: `Usuario: ${user.firstName}, vinculado al bootcamp ${bootcamp.title}`,
        });
        
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Ha ocurrido un error al intentar vincular el bootcamp al usuario.`,
        });
    }
}

//Obtener los Bootcamp por id llamado findById
export const findById = async (req, res) => {
    try {
        let { id } = req.params;
        const bootcamp = await Bootcamp.findOne({
            where: { id },
            attributes:['id', 'title', 'cue', 'description'],
            include: {
                model: User,
                as: "users",
                through: { attributes: [] },
                attributes: ['id', 'firstName', 'lastName', 'email']
            },
        });
        if(!bootcamp){
            res.status(404).send({
                code: 404,
                message:'El bootcamp no existe.'
            })
        }
        res.send({ code: 200, data: bootcamp });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: error.message,
        });
    }
}

//Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll
export const findAll = async (req, res) => {
  try {
      const bootcamps = await Bootcamp.findAll({
          attributes:['id', 'title', 'cue', 'description'],
          include: [
              {
                  model: User,
                  as: "users",
                  through: {attributes: []},
                  attributes:['id', 'firstName', 'lastName', 'email']
              },
          ],
      });
      res.send({ code: 200, data: bootcamps });
  } catch (error) {
      res.status(500).send({
          code: 500,
          message: "Error a  consultar los bootcamps",
      });
  }
};