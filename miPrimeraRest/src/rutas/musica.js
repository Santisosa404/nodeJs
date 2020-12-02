import express from 'express';
import mock from '../../mock';
import{auth} from '../middlewares';

const router = express.Router();

router
        .get('/',(req,res,next) =>{
            res
                .status(200)
                .json(mock)
        })
        .post('/',auth,(req,res,next)=>{
            console.log(req.body);
            res 
                .status(201)
                .json(req.body)
        });
router.get('/:cantante',(req,res,next) =>{
    const cancionesCantante = mock.filter(item =>
        item.cantante.toLowerCase() === req.params.cantante.toLowerCase());
    res
        .status(200)
        .json(cancionesCantante)
});


export default router;