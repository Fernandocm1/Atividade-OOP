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
    // public setJaula(criatura : string){
    //     this.criatura = criatura;
    //   //  this.jaulaAdd = Array<criatura> = [];
    // }
    // public getJaula() : string{
    //     return this.criatura;
    // }

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
                //console.log("O tamanho da lista é este: "+this.animais.length);
                this.animais.push(animal);
                console.log(this.limiteJaula);
                //this.listar();
                return true;
            }else{
                console.log("Jaula cheia");
                //console.log(this.listaJaulas[0].animais.length);
                return false;
            }
        }else{
            return false;
        }
    }
}
// export class jaulas{
//     private lista : Array<any>; 
//     private limiteLista : number ;
//     constructor(){
//         this.limiteLista = 0;
//         this.lista =[];
//     }
// // colocar os get e set
// }