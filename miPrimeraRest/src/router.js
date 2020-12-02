import user from './rutas/user';
import musica from './rutas/musica';
import auth from './rutas/auth';

export default app =>{
    app.use('/me', user);
    app.use('/musica',musica);
    app.use('/auth',auth);
}