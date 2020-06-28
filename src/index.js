let homePage = require('./homePage')
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales');
let contacto = require('./contacto');
let preguntasFrecuentes = require('./preguntasFrecuentes');

let index ={
    homePage: function(res){
        // Título
        res.write(homePage.titulo +'\n \n');
        // Cantidad de peliculas
        res.write("Total: " + homePage.cantidad() + '\n \n');
        //Películas ordenadas
        let titulos = homePage.listarPelis();
        for (titulo of titulos) {
            res.write(titulo)
            res.write('\n')
        }
        //Pie de página
        res.write('\n')
        res.write('Recorda que podes visitar las secciones: \n \n')
        res.write('En Carteleta \n')
        res.write('Mas Votadas \n')
        res.write('Sucursales \n')
        res.write('Contacto \n')
        res.write('Preguntas Frecuentes')
        res.end()
    },
    enCartelera: function(res){
        //Título
        res.write(enCartelera.titulo +'\n \n');
        // Cantidad de peliculas
        res.write("Total: " + homePage.cantidad() + '\n \n');
        // Títulos de películas con sus reseñas
        let movies = enCartelera.leerJSON();
        movies.movies.forEach(function(datos){
            res.write("---------------------------------------------------------------------------------------------------------------------\n")
            res.write("Titulo: " + datos.title)
            res.write("\n")
            res.write("Reseña:")                 
            res.write("\n")                      
            res.write(datos.overview)            
            res.write("\n")
            res.write("---------------------------------------------------------------------------------------------------------------------\n \n")
        })
        res.end();
    },
    masVotadas: function(res){
        //Título
        res.write(masVotadas.titulo +'\n \n');
        // Cantidad de peliculas
        res.write(`Total: ${masVotadas.cantidad()}\n \n`);
        //Rating promedio
        res.write(`Promedio de Ratings: ${masVotadas.ratingPromedio()} \n \n`);
        // Títulos de películas con su rating y reseñas
        let pelis = masVotadas.listarPelis();     
        pelis.forEach(function(datos){
            res.write("---------------------------------------------------------------------------------------------------------------------\n")
            res.write("Titulo: " + datos.title)             // TITULO
            res.write("\n")
            res.write("Rating: " + datos.vote_average)      //RATING
            res.write("\n")
            res.write("Reseña:")                            //________
            res.write("\n")                                 //RESEÑA  |
            res.write(datos.overview)                       //¨¨¨¨¨¨¨¨
            res.write("\n")
            res.write("---------------------------------------------------------------------------------------------------------------------\n \n")
        })
        res.end();
    },
    sucursales: function(res){
        //titulo
        res.write(sucursales.titulo +'\n \n');
        //cantidad de salas
        res.write("Total: " + sucursales.cantidadSalas() + '\n \n');
        //lista de salas: Nombre, Direccion y Descripcion
        let salas = sucursales.leerJSON();           
        salas.theaters.forEach(function(datos){
        res.write("---------------------------------------------------------------------------------------------------------------------\n")
        res.write("Nombre: " + datos.name)              //NOMBRE
        res.write("\n")
        res.write("Direccion: " + datos.address)        //DIRECCION
        res.write("\n")
        res.write("Descripcion:")                       //____________
        res.write("\n")                                 //DESCRIPCION |
        res.write(datos.description)                    //¨¨¨¨¨¨¨¨¨¨¨¨
        res.write("\n")
        res.write("---------------------------------------------------------------------------------------------------------------------\n \n")
        })
        res.end();
    },
    contacto: function(res){
        //titulo
        res.write(contacto.titulo + "\n \n")
        //contenido
        res.write(contacto.contenido + "\n \n")
        res.end();
    },
    preguntasFrecuentes: function(res){
        //titulo
        res.write(preguntasFrecuentes.titulo + "\n \n")
        //total de preguntas
        res.write("Total de preguntas: " + preguntasFrecuentes.cantidadPreguntas() + "\n \n")
        //listado de preguntas y respuestas
        let preguntas = preguntasFrecuentes.leerJSON();
        preguntas.faqs.forEach(function(PyR){
            res.write("---------------------------------------------------------------------------------------------------------------------\n")
            res.write("Pregunta: " + PyR.faq_title)
            res.write("\n \n")
            res.write("Respuesta: " + PyR.faq_answer)
            res.write("\n")
            res.write("---------------------------------------------------------------------------------------------------------------------\n \n")
        })
        res.end();
    }
}
module.exports = index