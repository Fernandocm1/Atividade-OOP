"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mamifero_1 = require("./mamifero");
var Zoologico = /** @class */ (function () {
    function Zoologico() {
        this.count = 0;
        this.listaJaulas = [];
    }
    Zoologico.prototype.addJaula = function (jaula) {
        //let jaula = new jaulas(descJaula,limite);
        this.listaJaulas.push(jaula);
        console.log("------------------------");
        //console.log(this.listaJaulas);
        this.count = this.count + 1;
        if (this.count == 3) {
            this.parasaber();
        }
    };
    Zoologico.prototype.parasaber = function () {
    };
    Zoologico.prototype.addAnimal = function (animal, nomeAnimal) {
        animal.setNome(nomeAnimal);
        for (var i = 0; i < this.listaJaulas.length; i++) {
            //let jaula = new jaulas(listaJaulas[i].limiteJaula:,limite);
            //jaula.addAnimal(especieAnimal)==true
            var retornoAnimal = this.listaJaulas[i].addAnimal(animal);
            if (retornoAnimal == true) {
                break;
            }
        }
    };
    Zoologico.prototype.listar = function () {
        for (var i = 0; i < this.listaJaulas.length; i++) {
            console.log("------------------------------");
            console.log("Jaula: " + i);
            console.log("A espécie é: " + this.listaJaulas[i].getDescJaula());
            console.log("O limite da jaula é: " + this.listaJaulas[i].getLimiteJaula());
            this.listaJaulas[i].animais.forEach(function (Element) {
                console.log("O nome do Animal é: " + Element.getName());
                if (Element instanceof mamifero_1.Mamifero) {
                    Element.fazerbarulho();
                }
            });
            console.log("------------------------------");
        }
    };
    return Zoologico;
}());
exports.Zoologico = Zoologico;
