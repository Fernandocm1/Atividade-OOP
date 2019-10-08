import { Animal } from './Animal';


export class jaulas{
    private descJaula : string;
    private especie : any;
    public animais : Array<Animal>  ;
    private limiteJaula : number;
    
    constructor(descJaula: string, limiteJaula:number,especie:any){
        this.limiteJaula = limiteJaula;
        this.animais = [];
        this.especie = especie;
        this.descJaula=descJaula;
    }

    public setDescJaula(descJaula : string){
        this.descJaula = descJaula;
    }
    public getDescJaula(): Object{
        return this.descJaula;
    }
    public setEspecie(especie : any){
        this.especie = especie;
    }
    public getEspecie(): any{
        return this.especie;
    }
    public setLimiteJaula(limite : number){
        this.limiteJaula = limite;
    }
    public getLimiteJaula(): number{
        return this.limiteJaula;
    }
    public setAnimais(animal : any){
        this.animais = animal;
    }
    public getAnimais(): any{
        return this.animais;
    }
    public addAnimal(animal : Animal): any{
        if(animal instanceof this.especie){
            if(this.animais.length < this.limiteJaula){
                this.animais.push(animal);
                console.log(this.limiteJaula);
                return true;
            }else{
                console.log("Jaula cheia");
                return false;
            }
        }else{
            return false;
        }
    }
}