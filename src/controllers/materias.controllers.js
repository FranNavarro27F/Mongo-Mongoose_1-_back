const Estudiante= require("../Models/Estudiante");

exports.obtenerMaterias= async (req, res)=> {
    try {
        if(req.params.idEst){
            const idEst= req.params.idEst;
            const estudiante= await Estudiante.findById(idEst);
            res.json(estudiante.materias);
        }else{
            res.json({error: "Deve enviar el id del estudiante"});
        }
    } catch (e) {
        res.status(500).json({error});
    }
};

exports.agregarMateria= async (req, res)=>{
    
    try {
        if(req.params.idEst && req.body){

            const idEst= req.params.idEst;
            const materia= req.body;
            const estudiante= await Estudiante.findById(idEst);
            estudiante.materias.push(materia);
            await estudiante.save();
            res.json({isOk: true});

        }else{
            res.status(400).json({error: "Datos insuficientes"});
        }
        
    } catch (e) {
        res.status(500).json(e)
    }
};

exports.eliminarMateria= async (req, res)=>{
    try {
        if(req.params.idEst && req.params.idMat){
            const idEst= req.params.idEst;
            const idMat= req.params.idMat;
            const estudiante= await Estudiante.findById(idEst);
            

            for(let i=0; i < estudiante.materias.length; i++){
                // console.log(estudiante.materias[i]);
                if(estudiante.materias[i]._id == idMat){
                    estudiante.materias.splice(i, 1)
                }
            }
            await estudiante.save()
            res.json({isOk: true})
        }else{
            res.status(400).json({error: "Debe incluir el id del estudiante y materia a eliminar"});
        }

    } catch (e) {
        res.status(500).json(e);
    }
};

exports.actualizar= async (req, res)=>{
    try {
        if(req.params.idEst && req.params.idMat && req.body){
            const idEst= req.params.idEst;
            const idMat= req.params.idMat;
            const data= req.body;
            const estudiante= await Estudiante.findById(idEst);


            for(let i=0; i < estudiante.materias.length; i++){
                if(estudiante.materias[i]._id == idMat){
                    // console.log(estudiante.materias[i])
                    Object.assign(estudiante.materias[i], data)
                }
            }
            await estudiante.save();
            
            res.json({isOk: true});

        }else{
            res.status(400).json({error: "Debe enviar todos los datos"});
        }
        
    } catch (e) {
        res.status(500).json({error:e, isOk: false});
    }
}

