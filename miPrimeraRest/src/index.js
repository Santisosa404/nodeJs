import express from 'express';
import config from '../src/config';
//Caragmos las rutas con el import de routes
import rutas from './router';
let _serve;

const servidor ={
    start(){
        const app = express();
        config(app);
        rutas(app);
      
        _serve = app.listen('9000',() =>{
            const address = _serve.address();
            const host = address.address === '::' ? 'localhost' : address
            const port = app.locals.config.PORT;
            if(process.env.NODE_ENV !== 'test')
                console.log(`Has conseguido abrir el servidor joven viajero.\n http://${host}:${port}`);
        });
        return _serve;
    },
    close(){
        _serve.close();
    }
}
export default servidor;
