import "dotenv/config";
import express from 'express';
import cors from 'cors';


const app = express();
//Usa el middleware de cors en cualquier peticion
app.use(cors);

app.get("/", (req, res) => {
  res.send("¡Hola Mundo!");
});

app.listen(process.env.PORT, () =>
  console.log(`Aplicacion desplegada en http://localhost:${process.env.PORT}`)
);

