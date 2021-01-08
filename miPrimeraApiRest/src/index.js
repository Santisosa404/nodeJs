import "dotenv/config";
import express from "express";
import cors from "cors";
import { Task } from "./model/Task";
import moment from "moment";

const app = express();
app.use(cors());
let num=0;
let t1 = new Task(1, "Tarea de Prueba numero 1", moment());
let t2 = new Task(2, "Tarea de Prueba numero 2", moment());

let listadoTask = [t1, t2];



function existe(id) {
    let result = false;
    listadoTask.forEach(Task => {
        if (Task.id == parseInt(id) && result == false) {
           result=true;
        }
    });
    return result;
}

function buscarId(id) {
    let fake;
    listadoTask.forEach(Task => {
        if (Task.id == parseInt(id)) {
            fake= Task;
        }
    });
    return fake;
}

app.get("/task", (req, res, next) => {
    if (listadoTask.length == 0) {
        res
            .send("El array está vacio")
            .status(404);
    } else {
        res
            .send(listadoTask)
            .status(200);
    }
});
app.get("/task/:id", (req, res, next) => {
    if (existe(req.params.id)) {
        res
            .send(buscarId(req.params.id))
            .status(200);
    } else {
        res.status(404);
    }
});

app.post("/task", (req,res,next) => {
    num++;
    let task = new Task(Math.floor(Math.random()*(45-3)+3),`Tarea ${num} creado por metodo post`,moment());
    listadoTask.push(task);
    res
        .send(task)
        .status(201);
});

app.put("/task/:id",(req,res,next)=>{
    if (existe(req.params.id)) {
        buscarId(req.params.id).texto="Editado por un metodo put";
        res
            .send(buscarId(req.params.id))
            .status(200);
    }
});

app.delete("/task/:id", (req,res,next)=>{
    let index = listadoTask.indexOf(buscarId(req.params.id));
    listadoTask.splice(index,1);
    res
        .send("Eliminado")    
        .status(200);
});

app.listen(process.env.PORT, () => {
    console.log(`Api Rest disponible en http://localhost:${process.env.PORT}`);
});

//Metodos

