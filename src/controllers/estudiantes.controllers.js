const Estudiante= require("../Models/Estudiante");
const guardarArchivo = require("../utils/guardar-archivo");
const agregarArchivo= require("../utils/guardar-archivo");

exports.obtener= async (req, res)=>{
  try {
    const estudiantes= await Estudiante.find({activo: true})
    res.json(estudiantes);
  } catch (e) {
    res.json(e)
  }
};

exports.agregar= async(req, res)=>{

    if(req.files){
        //llama el método
      const respuesta= await guardarArchivo(req.files, "expediente", "pdf")
      if(respuesta.isOk){
        res.json({isOk: true});
      }else{
        res.json({error: respuesta.error});
      }
    }else{
        res.json({error: "Debe adjuntar el expediente del estudiante en pdf"});
    }
    // try {
    //     const {nombre, correo, materias}= req.body;
    //     console.log(nombre);
    //     if(nombre && correo){
    //         const nuevoEstudiante= new Estudiante({nombre: nombre, correo: correo, materias: materias});
    //         await nuevoEstudiante.save();
        
    //         res.json({msj: "Documento insertado de forma satisfactoria", id: nuevoEstudiante._id});
    //     }else{
    //         res.json({isOk: false, msj: "Faltan datos requeridos"});
    //     }

    // } catch (e) {
    //     res.json(e)
    // }
};

exports.actualizar= async (req, res)=>{
    try {
        const id= req.params.id;
        const data= req.body;
        if(id && data){
            await Estudiante.findByIdAndUpdate(id, data);
            console.log(id)
            res.json("Registro actualizado");
        }else{
            res.json({msj: "Datos insuficientes"})
        }

    } catch (e) {
        res.json(e)
    }
 };

 exports.eliminar= async (req, res)=>{
   try{
        const id= req.params.id;
        console.log(id)
        const elimidado= await Estudiante.findByIdAndUpdate(id, {activo: false})

        res.json({msj: "Dato borrado de forma satisfactoria", isOk: true});
   }catch(e){
        res.status(500).json(e);
   }
};