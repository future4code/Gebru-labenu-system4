import {Turma} from "../../endpoints/types/turma"
import { BaseDatabase } from "../Basedatabase"


// Essa função está inserindo dados na tabela "turma"
export class TurmaDataBase extends BaseDatabase{
   
// Função que cria uma turma
 public turmas = async(turma:Turma)=>{//(parametro:class)
    try {
        await this.connection("turma")//passa o nome da tabela()
        .insert(turma)//(parametro)

    } catch (error:any) {
        throw new Error(error.sqlmessage || error.message);
        
    }
}
    

}