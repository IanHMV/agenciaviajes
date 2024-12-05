
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'


const app = express(); //Solamente puede haber una instancia de nuestra aplicacion

//Conectar a la base de datos
db.authenticate()
    .then( ()=> console.log('Base de datos Conectada'))
    .catch( error => console.log(error));

    //El puerto se va a conectar al puerto que se tenga 'process.env.PORT' (siempre es ese nombre)
const port = process.env.PORT || 4000;

//express en el callback utiliza lo que es el request y el response:
//request : lo que tu envias (como enviar un formulario, etc)
//response : lo que express te responde (como las alertas)

//app.get('/',(req,res) =>{ //Envias una peticion de tipo get, es decir cuando visitamos esa pagina

//    res.send('Inicio'); //tambien puedes crear tu propia respuesta
    //.send es un metodo utilizado para mostrar algo en pantalla

    // res.json({
    //     id:1
    // }); //tambien puedes obtener una respuesta json

    //res.render(); // se utiliza para mostar una vista
//})

// app.get('/nosotros',(req,res) =>{ 
//     res.send('Nosotros'); 
// })

// app.get('/contacto',(req,res) =>{ 
//     res.send('Contacto'); 
// })

//Habilitar pug
app.set('view engine', 'pug');

//Obtener el ano actual
app.use((req,res, next)=>{ //Ese next lo que hace es ir al siguiente middleware
    
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio= "Agencia de Viajes";
    return next(); //Pasa al siguiente middleware (return es como un !important, lo obliga a hacer la accion)
});

//Agregar body parser para leer los datos del forulario
app.use(express.urlencoded({extended:true}));

//Definir la carpeta publica:
app.use(express.static('public')); //Agregamos la carpeta publica como los archvios estaticos de express (middleware)

//Agregar router
app.use('/', router); //Use soporta get, post, put, patch y delete y todos los diferentes verbos que hay (middleware)
//Y esto lo que hace es que desde la pagina principal, agrega inicio, contacto y nosotros, y todas las diferentes rutas que vayamos definiendo



app.listen(port, () =>{ //Middleware
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})