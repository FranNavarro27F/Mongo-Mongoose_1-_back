const { Router } = require("express");
const ctrProfesores= require("../controllers/profesores.controllers");

const routerProfesor= Router();

routerProfesor.post("/registrar", ctrProfesores.registrar);

routerProfesor.post("/login", ctrProfesores.login)

module.exports= routerProfesor;
