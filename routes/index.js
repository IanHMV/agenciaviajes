
import express from 'express';
import { paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje 
} from '../controllers/paginasControllers.js';
import { guardarTestimonial } from '../controllers/testimonialCotroller.js';

//Aqui estaremos colocando todo lo relacionado a las rutas

const router = express.Router(); // De esta forma estaremos utilizando la misma instancia de express (que se encuentra en el index.js afuera de la carpeta), pero estamos utilizando su router


router.get('/',paginaInicio);

router.get('/nosotros',paginaNosotros);

router.get('/contacto',(req,res) =>{ 
    res.send('contacto'); 
});

router.get('/viajes',paginaViajes);

//Para que te puedas redireccionar con los enlaces que hay adentro de viaje, puedes utilizar algo llamado "comodin"
//Ese comodin (en este caso "slug", se puede modificar y no habra error, le puedes poner como sea necesario)
router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial); //Post sirve para que se ejecute la funcion cuando se envien los datos

export default router;