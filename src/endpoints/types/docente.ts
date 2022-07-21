export class docente {
    private id: string ;
    private nome: string ;
    private email: string ;
    private data_nasc: Date;
    private turma_id: string ;
    
    constructor(
    id: string,
    nome: string ,
    email: string ,
    data_nasc: Date,
    turma_id: string 
    ){
    this.id = id 
    this.nome = nome
    this.email = email
    this.data_nasc = data_nasc
    this.turma_id = turma_id
    }
}





    /* public getId(): string {
     return this.id;
    }; */


    


//private transactions: Transaction[] = [];