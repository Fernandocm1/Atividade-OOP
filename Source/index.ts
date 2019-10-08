import { Tartaruga } from './tartaruga';
import { Cachoro } from "./cachoro";
import { Gato } from "./gato";
import { Zoologico} from './zoologico'
import { jaulas } from "./jaulas";

let cachorro = new Cachoro();
let tartaruga = new Tartaruga();
cachorro.getName();
let gato = new Gato();
let zoologico = new Zoologico();

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