import {Turma} from "../../endpoints/types/turma"
import { BaseDatabase } from "../Basedatabase"


// Essa função está inserindo dados na tabela "turma"
export class TurmaUpdate extends BaseDatabase{
   
// Função que altera o modulo da turma
  turmas = async(id:Turma,modulo:Turma )=>{//(parametro:class)
    try{

    
        await this.connection("turma")//passa o nome da tabela()
        .update({modulo: modulo})
        .where({id: id})
       

    } catch (error:any) {
        throw new Error(error.sqlmessage || error.message);
        
    }
}
    

}

