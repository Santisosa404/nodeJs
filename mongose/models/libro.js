let moongose = require('mongoose');

let bookSchema = moongose.Schema({
    _id: moongose.Schema.ObjectId,
    titulo: String,
    sinopsis: String,
    isbn: String,
    portada: Buffer,
    autor: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    valoracion: [{
        resumen: String,
        puntuacion: Number,
        creacion: {
            type: Date,
            default: Date.now
        }
    }],
    creacion: {
        type: Date,
        default: Date.now
    }
});

let Libro = moongose.model('Libro', bookSchema);

module.exports = Libro;