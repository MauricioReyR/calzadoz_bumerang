//Creacion de laconexion de la Base de Datos
let mysql = require("mysql");
//se crea una variable para la conexion
let conexion =  mysql.createConnection({
    host: "localhost",
    database: "calzados_bumerang",
    user: "root",
    password: ""
});
//comprobar si funciona el codigo de la conexion
conexion.connect(function(err)
{
    if(err){
        throw err;
    }else{
        console.log("Conexion Exitosa");
    }
});
conexion.end();