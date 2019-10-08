import { Mamifero } from "./mamifero";


export class Gato extends Mamifero{


    public fazerbarulho(): void{
        console.log("Miau");
    }
    public classTypeGuard(object: any): boolean {
        return object instanceof Gato;
    }

    public setNome(nome:string){
        this.nome = nome;
    }
    public getName(): string{
        return this.nome;
    }

}