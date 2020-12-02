import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';


const ajustes = config();
export default app => {
    app.disable('x-powered-by');

    app.set('env', ajustes.parsed.ENV);
    //Guardamos las variables de entorno en express
    app.set('config', ajustes.parsed);
    
    //Entorno local
    app.locals.env = app.get('env');
    app.locals.config = app.get('config');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //Nos gestiona las cabezeras del api
    app.use(cors());

}