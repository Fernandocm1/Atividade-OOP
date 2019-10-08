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
zoologico.addJaula(new jaulas_1.jaulas("Jaula para Cachorros", 1, cachoro_1.Cachoro)),
    zoologico.addJaula(new jaulas_1.jaulas("Jaula para Tartaruga", 3, tartaruga_1.Tartaruga)),
    zoologico.addJaula(new jaulas_1.jaulas("Jaula para Cachorros", 5, cachoro_1.Cachoro)),
    cachorro.setNome("Maggie");
cachorro.setTamanho("Grande");
zoologico.addAnimal(new cachoro_1.Cachoro(), "Maggie");
zoologico.addAnimal(new tartaruga_1.Tartaruga(), "Tobby");
zoologico.addAnimal(new cachoro_1.Cachoro(), "Laila");
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
