import "dotenv/config";
import express from "express";
import cors from "cors";


const app = express();
app.use(cors());

app.get("/task",(req,res,next)=>{
    res.send("Hola mundo")
});


app.listen(process.env.PORT,() =>{
    console.log(`Api Rest disponible en http://localhost${process.env.PORT}`);
});


