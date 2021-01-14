let moongose = require('mongoose');

let autorSchema = moongose.Schema({
    _id: moongose.Schema.ObjectId,
    datosPersonales: {
        nobre: String,
        apellidos: String
    },
    biografia: String,
    twitter: {
        type: String,
        validate: {
            validator: function (text) {
                return text.indexOf('https://twitter.com/') === 0;
            },
            message: 'El url de Twitter de empezar asi: https://twitter.com/'
        }
    },
    instagram: {
        type: String,
        validate: {
            validator: function (text) {
                return text.indexOf('https://instagram.com/') === 0;
            },
            message: 'El url de Instragram de empezar asi: https://instagram.com/'
        }
    },
    fotoPerfil: Buffer,
    creacion: {
    type: Date,
    default: Date.now
}
});

let Autor = moongose.model('Autor', autorSchema);

module.exports = Autor;