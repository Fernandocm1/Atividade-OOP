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
var repteis_1 = require("./repteis");
var Tartaruga = /** @class */ (function (_super) {
    __extends(Tartaruga, _super);
    function Tartaruga() {
        var _this = _super.call(this) || this;
        _this.nome = '';
        return _this;
    }
    Tartaruga.prototype.fazerbarulho = function () {
        console.log("Hmmm");
    };
    Tartaruga.prototype.andar = function () {
        console.log("Tartaruga Andando");
    };
    Tartaruga.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Tartaruga.prototype.getName = function () {
        return this.nome;
    };
    Tartaruga.prototype.classTypeGuard = function (object) {
        return object instanceof Tartaruga;
    };
    return Tartaruga;
}(repteis_1.Repeteis));
exports.Tartaruga = Tartaruga;
