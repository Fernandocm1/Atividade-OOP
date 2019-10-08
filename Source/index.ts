import { Tartaruga } from './tartaruga';
import { Cachoro } from "./cachoro";
import { Mamifero } from "./mamifero";
import { Gato } from "./gato";
import { Zoologico} from './zoologico'
import { jaulas } from "./jaulas";
import { Aves } from "./aves";
import { Repeteis } from "./repteis";

let cachorro = new Cachoro();
let tartaruga = new Tartaruga();
cachorro.getName();
let gato = new Gato();
let zoologico = new Zoologico();
//let jaula = new jaulas();
//let jaula1= new jaulas();
//let jaula2 = new jaulas();
/*jaula.setLimiteJaula(1);
jaula.setEspecie(cachorro);
jaula1.setLimiteJaula(6);
jaula1.setEspecie(tartaruga);
jaula2.setLimiteJaula(7);
jaula2.setEspecie(cachorro);
*/
// opçao 1
zoologico.addJaula(new jaulas("Jaula para Cachorros",1,Cachoro)),

zoologico.addJaula(new jaulas("Jaula para Tartaruga",3,Tartaruga)),

zoologico.addJaula(new jaulas("Jaula para Cachorros",5,Cachoro)),

cachorro.setNome("Maggie");
cachorro.setTamanho("Grande");

zoologico.addAnimal(new Cachoro(),"Maggie");

zoologico.addAnimal(new Tartaruga(),"Tobby");

zoologico.addAnimal(new Cachoro(),"Laila");

zoologico.listar();

/*
cachorro = new Cachoro();
cachorro.setNome("Rex");
zoologico.addAnimal(cachorro);

cachorro = new Cachoro();
cachorro.setNome("pit");
zoologico.addAnimal(cachorro);


cachorro = new Cachoro();
cachorro.setNome("Tobi");
zoologico.addAnimal(cachorro);
cachorro = new Cachoro();
cachorro.setNome("Thor");
zoologico.addAnimal(cachorro);
cachorro = new Cachoro();
cachorro.setNome("Toreto");
zoologico.addAnimal(cachorro);
*/