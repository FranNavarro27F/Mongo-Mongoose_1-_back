const { Router }= require("express");
const ctrEst= require("../controllers/estudiantes.controllers");
const autorizarProfesor= require("../auth/auth.profesor");
const routerEstudiantes= Router();



routerEstudiantes.get("/", autorizarProfesor, ctrEst.obtener );

routerEstudiantes.post("/", ctrEst.agregar);

routerEstudiantes.put("/:id", ctrEst.actualizar);

routerEstudiantes.delete("/:id", ctrEst.eliminar);



module.exports= routerEstudiantes;