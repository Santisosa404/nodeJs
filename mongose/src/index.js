let moongose = require('mongoose');
let Autor = require('../models/autor');
let Libro = require('../models/libro');

moongose.connect('mongodb://localhost/mongoose_dateBase', (error) => {
    if (error) throw error;
    console.log("Conexion relizada correctamente");



    //Creacion de datos en mongo con su guardado

    let zatuAutor = new Autor({
        _id: moongose.Types.ObjectId(),
        datosPersonales: {
            nombre: 'Saturnino',
            apellidos: 'Rey'
        },
        twitter:'https://twitter.com/yoZatu',
        biografia: 'Cantante del Grupo SFDK',
    })

    zatuAutor.save((error) => {
        if (error) throw error;
        console.log("Autor guardado correctamente");
    });

    let sfdk1 = new Libro({
        _id: moongose.Types.ObjectId(),
        titulo: 'Yo Zatu y mi Severa Fractura De Kraneo',
        sinopsis: 'La prolífica actividad de Zatu (SFDK) en Twitter donde muchos de sus miles de seguidores disfrutaban le fue llevando sin quererlo a atender la demanda de sus lectores en la que pedían que reuniera todas esas historias en un libro.',
        isbn: '7873659722448',
        autor: zatuAutor._id,
        valoracion: [{
            resumen: 'Libro de lectura rapida, buen libro para pasar el rato',
            puntuacion: 8.76,
        }],
    });
    let sfdk2 = new Libro({
        _id: moongose.Types.ObjectId(),
        titulo: 'Sinfonia Frenética Del Kaos',
        sinopsis: 'Segundo libro de Zatu repleto de vivencias, anécdotas y experiencias que sigue la linea de su predecesor, "Yo Zatu y mi Severa Fractura De Kráneo"',
        isbn: '7873659722449',
        autor: zatuAutor._id,
        valoracion: [{
            resumen: 'Libro de lectura rapida, buen libro para pasar el rato',
            puntuacion: 8.77,
        }],
    })
    sfdk1.save((error) => {
        if (error) throw error;
        console.log('Libro guardado correctamente ');
    });
    sfdk2.save((error) => {
        if (error) throw error;
        console.log('Libro guardado correctamente ');
    });
});

Libro.find({
    titulo: /frenética/i
}).sort('-created')
.limit(5)
.exec(function(err, Libros) {
    if (err) throw err;
     
    console.log(Libros);
});
 
Autor.findById('5ff8393e6ff6692b046bac5d', function(err, autor) {
    if (err) throw err;
     
    autor.twitter = 'https://twitter.com/yoZatu';
     
    autor.save(function(err) {
        if (err) throw err;
         
        console.log('Autor updated successfully');
    });
});
 
Autor.findByIdAndUpdate('5ff8393e6ff6692b046bac5d', { twitter: 'https://twitter.com/yoZatu' }, function(err, autor) {
    if (err) throw err;
     
    console.log(autor);
});


