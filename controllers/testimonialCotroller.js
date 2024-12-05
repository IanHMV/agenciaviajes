
import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) =>{
    
    //Validar
    const {nombre,correo,mensaje} = req.body;

    const errores = []

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'})
    }

    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'})
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    if(errores.length > 0){
        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores: errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
        
    }else{
        
        try{
            await Testimonial.create({ //Se crea testimonial
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
            
        }catch(error){
            console.log(error);
        }
    }

    //console.log(req.body); //req.body va a ser lo que el usuario coloque en el formlario
}

export {
    guardarTestimonial
}