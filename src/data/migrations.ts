/*  import { BaseDatabase } from "./Basedatabase"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => BaseDatabase
   .raw(`

      CREATE TABLE IF NOT EXISTS turma (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) ,
         modulo VARCHAR(255) DEFAULT 0
          
      );


      CREATE TABLE IF NOT EXISTS estudante (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         data_nasc DATE NOT NULL,
         turma_id VARCHAR(255)  NOT NULL ,
         FOREIGN KEY(turma_id) REFERENCES turma(id)
         
      );

      CREATE TABLE IF NOT EXISTS docente (
         id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) ,
        email VARCHAR(255) UNIQUE NOT NULL,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) ,
        FOREIGN KEY( turma_id) REFERENCES turma(id) 
        
     );

     CREATE TABLE IF NOT EXISTS docente_especialidade (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        especialidade_id VARCHAR(255) NOT NULL,
        FOREIGN KEY( docente_id) REFERENCES docente(id)
     );

     CREATE TABLE IF NOT EXISTS especialidade (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) UNIQUE NOT NULL
     );

     CREATE TABLE IF NOT EXISTS estudante_hobby (
       id VARCHAR(255) PRIMARY KEY,
        hobby_id VARCHAR(255) NOT NULL,
        estudante_id VARCHAR(255) NOT NULL,
        FOREIGN KEY( hobby_id) REFERENCES hobby(id),
        FOREIGN KEY( estudante_id) REFERENCES estudante(id)
     );

     CREATE TABLE IF NOT EXISTS hobby (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) UNIQUE NOT NULL

     );

`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)


// Parando o script
const closeConnection = () => { BaseDatabase.raw() }

createTables()
   .finally(closeConnection) */
 