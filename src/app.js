const express = require('express');
const morgan= require("morgan");
const conexionDB= require("./db.conexion");
const routerEstudiantes= require("./routes/estudiantes.routes");
const routerMaterias= require("./routes/Materias.routes");
const routerProfesores= require("./routes/profesores.routes");
const fileupload= require("express-fileupload");
const app = express();


//Conexion a la DB
conexionDB();


//settings
app.set("name", "rest-api-nodejs");// esto le da nombre a la app
app.set("port", process.env.port || 3500);

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(fileupload({
    createParentPath: true
}));

//Llamado de rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use(express.static("public"));
app.use("/api/estudiantes", routerEstudiantes);
app.use("/api/materias", routerMaterias);
app.use("/api/profesores", routerProfesores);

module.exports= app;


