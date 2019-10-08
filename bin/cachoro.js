"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mamifero_1 = require("./mamifero");
var Cachoro = /** @class */ (function (_super) {
    __extends(Cachoro, _super);
    function Cachoro() {
        var _this = _super.call(this) || this;
        _this.nome = '';
        return _this;
    }
    Cachoro.prototype.fazerbarulho = function () {
        console.log("Au Au");
    };
    Cachoro.prototype.andar = function () {
        //super.andar();// complemento as caracteristicas do mamifero ou posso anular e dizer como sera feito no caso
        // como faz o cachorro andar, o super chama a classe pai
        //this.tamanho = '';
        // this.setTamanho('grande');
        console.log("Cachorro Andando");
    };
    Cachoro.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cachoro.prototype.getName = function () {
        return this.nome;
    };
    Cachoro.prototype.classTypeGuard = function (object) {
        return object instanceof Cachoro;
    };
    return Cachoro;
}(mamifero_1.Mamifero));
exports.Cachoro = Cachoro;
