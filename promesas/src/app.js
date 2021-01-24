let prom = require('./promesas');

prom.calcular(2,5).then((res)=>{
    console.log(res);
}, (error)=>{
    console.log(error);
});



// let promesa = new Promise((res,rej) =>{
//     res('Datos procesados exitosamente');
//     //rej('Error');
// });

// promesa.then((resultado) =>{
//     console.log(resultado);
// },(error)=>{
//     console.log(error);
// });