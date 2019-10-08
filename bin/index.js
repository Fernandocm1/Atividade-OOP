"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tartaruga_1 = require("./tartaruga");
var cachoro_1 = require("./cachoro");
var gato_1 = require("./gato");
var zoologico_1 = require("./zoologico");
var jaulas_1 = require("./jaulas");
var cachorro = new cachoro_1.Cachoro();
var tartaruga = new tartaruga_1.Tartaruga();
cachorro.getName();
var gato = new gato_1.Gato();
var zoologico = new zoologico_1.Zoologico();
// opçao 1
zoologico.addJaula(new jaulas_1.jaulas("Jaula para Cachorros", 1, cachoro_1.Cachoro)),
    zoologico.addJaula(new jaulas_1.jaulas("Jaula para Tartaruga", 3, tartaruga_1.Tartaruga)),
    zoologico.addJaula(new jaulas_1.jaulas("Jaula para Cachorros", 5, cachoro_1.Cachoro)),
    cachorro.setNome("Maggie");
cachorro.setTamanho("Grande");
zoologico.addAnimal(new cachoro_1.Cachoro(), "Maggie");
zoologico.addAnimal(new tartaruga_1.Tartaruga(), "Tobby");
zoologico.addAnimal(new cachoro_1.Cachoro(), "Laila");
zoologico.listar();
