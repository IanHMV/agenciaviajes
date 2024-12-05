import { Sequelize } from "sequelize";

import db from '../config/db.js';

//Le pasamos 2 valores, el primero es el nombre de tu tabla en sql y el segundo es el obj de config
export const Viaje = db.define('viajes', { //En este objetode configuracion vas a tener que definir cada una de las tablas, Ya sea que empiezes desde 0 o ya tengas tablas agregadas.
    //El id no es necesario, ese se da por sentado que existe
    titulo: { //Le tenemos que indicar que tipo de dato va tener y cuantos caracteres va a utilizar
        type: Sequelize.STRING //Sequelize utiliza string en vez de varchart y text
    },
    precio: { 
        type: Sequelize.STRING 
    },
    fecha_ida: {
        type: Sequelize.DATE 
    },
    fecha_vuelta: { 
        type: Sequelize.DATE 
    },
    imagen: { 
        type: Sequelize.STRING
    },
    descripcion: { 
        type: Sequelize.STRING 
    },
    disponibles: { 
        type: Sequelize.STRING 
    },
    slug: { 
        type: Sequelize.STRING 
    }
});