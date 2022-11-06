const Profesor= require("../Models/Profesor");
const jwt= require("jsonwebtoken");


const autorizarProfesor= async (req, res, next)=>{
    const strToken= req.headers.authorization;

    if(!strToken){
        return res.json({msj:"No se encontró el token"})
    }
    try {
        const token= strToken.split(" ")[1];
        const palabra= "es-muy-secreta";
        const llave= jwt.verify(token, palabra);
        const profesor= await Profesor.findById(llave._id);

        if(!profesor){
          return res.json({msj: "Usuario no encontrado"});
        }
        console.log(llave)
        
    } catch (e) {
        res.json(e)
    }


    next();
};

module.exports= autorizarProfesor;