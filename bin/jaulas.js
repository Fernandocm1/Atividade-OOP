"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jaulas = /** @class */ (function () {
    function jaulas(descJaula, limiteJaula, especie) {
        this.limiteJaula = limiteJaula;
        this.animais = [];
        this.especie = especie;
        this.descJaula = descJaula;
    }
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
                this.animais.push(animal);
                console.log(this.limiteJaula);
                return true;
            }
            else {
                console.log("Jaula cheia");
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
