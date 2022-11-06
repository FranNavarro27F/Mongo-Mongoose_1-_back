const Profesor= require("../Models/Profesor");
const jwt= require("jsonwebtoken");


exports.registrar= async (req, res)=>{

    try {
        const {correo, clave}= req.body;
        if(correo && clave){
            const nuevoProfesor= new Profesor({correo, clave});
            await nuevoProfesor.save();
            res.json({isOK: true, id: nuevoProfesor._id})
           
        }else{
            res.json({error: "Faltan datos requeridos"});
        }
    } catch (e) {
        res.json(e);
    }
};

exports.login= async (req, res)=>{
    try {
        const {correo, clave}= req.body;
        if(correo && clave){
            const profesor= await Profesor.findOne({correo});

            if(!profesor){
                res.json({token: null, msj: "usuario o contraseña incorrectos"});
            }else{
                if(profesor.clave == clave){
                    //coincide la clave
                    const {_id, correo}= profesor;
                    const opt= {
                        expiresIn: '1h'
                    }
                    const palabra= "es-muy-secreta";
                    const token= jwt.sign({_id, correo}, palabra, opt);
                    res.json({token});
                }else{
                    //no coincide la clave
                    res.json({token: null, msj: "usuario o contraseña incorrectos"});
                }
            }

        }else{
            res.json({error: "Faltan datos requeridos"});
        }
    } catch (e) {
        
    }
}