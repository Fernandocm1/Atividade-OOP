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