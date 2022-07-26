import { app } from "./app";
import { DocenteDataBase } from "../data/queries/docenteDataBase";
import { docente } from "./types/docente";
import { TurmaDataBase } from "../data/queries/turmaDataBase";
import { TurmaUpdate } from "../data/queries/turmaUpdate";

import {Request, Response} from "express"
import { Turma } from "./types/turma";
import { BaseDatabase } from "../data/Basedatabase";

//Endpoint que cadastra um docente
app.post("/docente", async(req:Request, res:Response)=>{
    //const data_nasc: Date = new Date(`%d-%m-%y`)

    try {
        const {nome,email,data_nasc,turma_id}=req.body
        const id = Math.random().toString()

const newCreate:docente = new docente(id,nome,email,data_nasc,turma_id)
const createDb = new DocenteDataBase()

await createDb.docentes(newCreate)

res.status(200).send("ok")

    } catch (error:any) {
        res.status(400).send(error.sqlmessage || error.message)
    }
} )

////Endpoint que altera as turmas
app.put("/turma/:id", async(req:Request, res:Response)=>{
    try {
    const id = req.params.id;
    const modulo = req.body.modulo;
    


const newMdule = new TurmaUpdate()

//await newMdule.turmas(id,modulo)





res.status(200).send("ok")

} catch (error:any) {
    res.status(400).send(error.sqlmessage || error.message)
}
} )










app.post("/turma", async(req:Request, res:Response)=>{
    
    try {
        const {id,nome,modulo}=req.body
        

const newCreate:Turma = new Turma(id,nome,modulo)//class Turma
const createDb = new TurmaDataBase()

await createDb.turmas(newCreate)

res.status(200).send("ok")

    } catch (error:any) {
        res.status(400).send(error.sqlmessage || error.message)
    }
} )
  
    
