import User from "../models/user.model.js"

export const validateEmail = async(req, res, next) => {
    let {email, password} = req.body;
    let usuario = await User.findOne({
        where: {email:email, password:password}
    })
    console.log('control 1',usuario)
    if(!usuario){
        return res.status(400).json({code:400, message: 'Usuario no registrado'})
    }    
    next()
}