"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jaulas = /** @class */ (function () {
    function jaulas(descJaula, limiteJaula, especie) {
        this.limiteJaula = limiteJaula;
        this.animais = [];
        this.especie = especie;
        this.descJaula = descJaula;
    }
    // public setJaula(criatura : string){
    //     this.criatura = criatura;
    //   //  this.jaulaAdd = Array<criatura> = [];
    // }
    // public getJaula() : string{
    //     return this.criatura;
    // }
    jaulas.prototype.setDescJaula = function (descJaula) {
        this.descJaula = descJaula;
    };
    jaulas.prototype.getDescJaula = function () {
        return this.descJaula;
    };
    jaulas.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    jaulas.prototype.getEspecie = function () {
        return this.especie;
    };
    jaulas.prototype.setLimiteJaula = function (limite) {
        this.limiteJaula = limite;
    };
    jaulas.prototype.getLimiteJaula = function () {
        return this.limiteJaula;
    };
    jaulas.prototype.setAnimais = function (animal) {
        this.animais = animal;
    };
    jaulas.prototype.getAnimais = function () {
        return this.animais;
    };
    jaulas.prototype.addAnimal = function (animal) {
        if (animal instanceof this.especie) {
            if (this.animais.length < this.limiteJaula) {
                //console.log("O tamanho da lista é este: "+this.animais.length);
                this.animais.push(animal);
                console.log(this.limiteJaula);
                //this.listar();
                return true;
            }
            else {
                console.log("Jaula cheia");
                //console.log(this.listaJaulas[0].animais.length);
                return false;
            }
        }
        else {
            return false;
        }
    };
    return jaulas;
}());
exports.jaulas = jaulas;
// export class jaulas{
//     private lista : Array<any>; 
//     private limiteLista : number ;
//     constructor(){
//         this.limiteLista = 0;
//         this.lista =[];
//     }
// // colocar os get e set
// }
