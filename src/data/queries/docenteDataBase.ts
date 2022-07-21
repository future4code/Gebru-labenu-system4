import {docente} from "../../endpoints/types/docente"
import { BaseDatabase } from "../Basedatabase"


// Essa função está inserindo um usuario na tabela "docente"
export class DocenteDataBase extends BaseDatabase{
   
// Função que cria um usuário 
 public docentes = async(Docente:docente)=>{
    try {
        await this.connection("docente")
        .insert(Docente)

    } catch (error:any) {
        throw new Error(error.sqlmessage || error.message);
        
    }
}
    

}



















/* public createDocente =async (docente:Docente) => {
    try {
        await this.connection("Docente")

    .insert({
    id: docente.id,
    nome: docente.nome,
    email: docente.email,
    data_nasc: docente.data_nasc,
    turma_id: docente.turma_id
        })
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message)
    }

} */



// **Criar docente;**

// 💡 Para criar um estudante, os dados enviados ao banco precisam ser uma **instância de classe** Docente;

// **→ Buscar todas as pessoas docentes;**

// **→ Mudar docente de turma;**