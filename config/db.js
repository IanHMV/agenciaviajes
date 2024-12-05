
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL, {

    define:{
        timestamps: false //Porque tiende a agregar un par de columnas cuando fue creado y cuando fue actuaklizado un registro
    },
    pool:{ //Configuracion de sequeliza
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}); //Y tienes que pasarle los siguientes valores: El primero es el nombre de la base de datos a la cual te quieres conectar, El segundo es el nombre del usuario, El tercero es el password, El cuarto es una serie de configuraciones.

export default db;