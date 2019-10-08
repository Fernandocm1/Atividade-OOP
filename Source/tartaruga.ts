import { Repeteis } from "./repteis";


export class Tartaruga extends Repeteis{
    public nome : string;

    constructor(){
        super();
        this.nome = '';
    }
    public fazerbarulho() :void{
        console.log("Hmmm");
    }
    public andar() : void{
        //super.andar();// complemento as caracteristicas do mamifero ou posso anular e dizer como sera feito no caso
       // como faz o cachorro andar, o super chama a classe pai
       //this.tamanho = '';
      // this.setTamanho('grande');
        console.log("Tartaruga Andando");
    }
    public setNome(nome:string){
        this.nome = nome;
    }
    public getName(): string{
        return this.nome;
    }
    public classTypeGuard(object: any) :boolean{
        return object instanceof Tartaruga;
    }
}