import {Postagem} from "./Postagem"

export class Usuario{
    public id: number                  /*so tem opcao de number e string, date e boolean SMP MINUSCULO*/
    public nome: string
    public senha: string
    public usuario: string
    public postagem: Postagem[]       /*importou da outra classe e as [] indicam array, mais de uma post*/
    public foto: string
    public tipo: string
    public dataNascimento: Date
    public bio: string
    public link: string
    public link2: string
    public link3: string
}
