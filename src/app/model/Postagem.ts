import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{     /*export para que as models se conversem entre elas*/ 
    public id: number
    public date: Date
    public texto: string
    public titulo: string
    public usuario: Usuario
    public tema: Tema
    
}
