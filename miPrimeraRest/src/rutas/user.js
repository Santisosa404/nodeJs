import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res
        .status(200)
        .json({
            nombre : 'Santiago',
            lastName : 'Sosa Díaz',
            hobbies :['Programar','Pintar','Escuchar música']
        })
});

export default router;