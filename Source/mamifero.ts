import { Animal } from "./Animal";


export abstract class Mamifero extends Animal{
    // public tamanho : string;
    // public peso: number;
    public nome : string;
    private tamanho : string; //so a classe mamifero tera acesso a variaveis privadas , ou seja nem  as que herdarem podem acessar
    private peso: number;
    // protected tamanho : string;
    // protected peso: number;

    constructor(){
        super();
        this.tamanho = '';
        this.peso = 0;
        this.nome = "";
    }
    public andar() :void{
        console.log("mamifero andando");
    }
    public abstract classTypeGuard(object: any) :boolean ;
    
    public abstract fazerbarulho(): void;

    public setTamanho(tamanho :  string){
        this.tamanho = tamanho;
    }
    public getTamanho(): string{
        return this.tamanho;
    }
    public setPeso(peso :  number){
        if(peso > 0){
            this.peso = peso;
        }
    }
    public getPeso(): number{
        return this.peso;
    }
    public abstract setNome(nome:string) : void;
    public abstract getName(): string;
}