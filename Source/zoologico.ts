import { Gato } from './gato';
import { Cachoro } from './cachoro';
import { Animal } from "./Animal";
import { Mamifero } from "./mamifero";
import { Repeteis } from "./repteis";
import { Aves } from "./aves";
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
            //console.log("este é o"+ this.listaJaulas[i].addAnimal(animal))
            /*
            let jaula = new jaulas();
            jaula.addAnimal(especieAnimal)==true
            
            let tamanho = this.listaJaulas[i].animais.length;
            let tipoAnimal = this.listaJaulas[i];
            let especieAnimal=this.listaJaulas[i].getEspecie();
            let retornoAnimal=animal.classTypeGuard(especieAnimal)
            if(animal.classTypeGuard(especieAnimal)==true){
                console.log("Limite da jaula é: "+this.listaJaulas[i].getLimiteJaula());
                if(tamanho < this.listaJaulas[i].getLimiteJaula() ){
                    console.log("O tamanho da lista "+i+" é este: "+tamanho);
                    this.listaJaulas[i].animais.push(animal);
                    this.listar();
                    break;
                }else{
                    console.log("Jaula cheia");
                    console.log(this.listaJaulas[0].animais.length);
                }
                
            }else if(i+1==this.listaJaulas.length){
                console.log("O animal não é do tipo correto!")
            }
        let tipo = typeof animal ;
        console.log(tipo);
        */
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