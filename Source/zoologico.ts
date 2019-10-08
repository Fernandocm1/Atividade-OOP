import { Animal } from "./Animal";
import { Mamifero } from "./mamifero";
import { jaulas } from "./jaulas";



export class Zoologico {
   private count : number = 0;

    private listaJaulas: Array<jaulas> = [];
    constructor(){
    }
    public addJaula(jaula : jaulas){
        //let jaula = new jaulas(descJaula,limite);

        this.listaJaulas.push(jaula);
        console.log("------------------------");
       //console.log(this.listaJaulas);
        this.count = this.count + 1;
        if(this.count == 3){
            this.parasaber();
        }
    }
    public parasaber(){

    }
    public addAnimal(animal : Animal,nomeAnimal:string ): void{
        animal.setNome(nomeAnimal);
        for(let i=0;i<this.listaJaulas.length;i++){
            //let jaula = new jaulas(listaJaulas[i].limiteJaula:,limite);
            //jaula.addAnimal(especieAnimal)==true
            let retornoAnimal = this.listaJaulas[i].addAnimal(animal);
            if(retornoAnimal==true){
                break;
            }
    }

    }
    public listar(){
        for(let i=0;i<this.listaJaulas.length;i++){
            console.log("------------------------------");
            console.log("Jaula: "+i);
            console.log("A espécie é: "+this.listaJaulas[i].getDescJaula());
            console.log("O limite da jaula é: "+this.listaJaulas[i].getLimiteJaula());
            this.listaJaulas[i].animais.forEach(Element =>{
                console.log("O nome do Animal é: "+Element.getName());
                if(Element instanceof Mamifero){
                    Element.fazerbarulho();
                }
            });
            console.log("------------------------------");
        }

    }
}