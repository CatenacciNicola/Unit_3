"use strict";
class User {
    constructor(_nome, _cognome) {
        this.credito = 0; // credito!:number   inizializzo a 0 o uso il !
        this.numeroChiamate = 0; // il ! comunica che fornirò poi il valore
        this.costoMinuto = 0.2;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    set ricarica(n) {
        this.credito += n;
    }
    chiamata(minutiChiamata) {
        let costo = this.costoMinuto * minutiChiamata;
        this.credito -= costo;
        this.numeroChiamate += minutiChiamata; //aggiungo i minuti passati in chiamata alla somma di tutti i minuti passati in chiamata
    }
    get chiama404() {
        return `il credito residuo è di ${this.credito}`;
    }
    ottieniNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const user1 = new User("Pinco", "Pallo"); //Creo un oggetto usando la classe User e passo i parametri del constructor
console.log("Credito prima della ricarica", user1.credito); //restituisce 0
user1.ricarica = 10;
console.log("Credito dopo la ricarica", user1.credito); //restituisce 10
user1.chiamata(5);
console.log(user1.chiama404); //9
