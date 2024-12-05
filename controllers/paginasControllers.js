import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req,res) =>{ //Envias una peticion de tipo get, es decir cuando visitamos esa pagina

    //res.send('Inicio'); //tambien puedes crear tu propia respuesta
    //.send es un metodo utilizado para mostrar algo en pantalla

    // res.json({
    //     id:1
    // }); //tambien puedes obtener una respuesta json

    //res.render(); // se utiliza para mostar una vista

    //consultar 3 viajes del modelo Viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit:3}));
    promiseDB.push(Testimonial.findAll({limit:3}));
    
    try{
        const resultado = await Promise.all(promiseDB); //Mejora ya que asi se ejecutan al mismo tiempo los codigos de consulta a la base de datos

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            resultados: resultado[0],
            testimoniales:resultado[1]
        });
    }catch(error){
        console.log(error);
    }

};


const paginaNosotros = (req,res) =>{ 
    //res.send('Nosotros'); 

    const viajes = 'Viaje a Alemania'; //variable

    res.render('nosotros', {
        //Aqui puedes poner toda la informacion que requieras mandar hacia la vista
        pagina: 'Nosotros'

    }); 
};

const paginaViajes = async (req,res) =>{

    //Consultar base de datos
    const viajes = await Viaje.findAll();

    //console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        resultados: viajes
    });
};

const paginaTestimoniales = async (req,res) =>{ 
    try{
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales:testimoniales
        });
    }catch(error){
        console.log(error);
    }
};

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res) =>{ 
    //console.log(req.params.viaje) //.viaje es el nombre del comodin y sirve para que te pueda imprimir un string

    //Este slug es el que esta en la pagina principal
    const {slug} = req.params;

    try{
        //Le hacemos un 'where' donde 'where:slug' es igual a 'viaje' , se le va a asignar a 'resultado'
        const viaje = await Viaje.findOne({where: {slug: slug}})

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje: viaje
        })
    }catch(error){
        console.log(error)
    }

};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}