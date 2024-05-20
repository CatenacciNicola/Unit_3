interface iSmartPhone{
    credito:number;
    numeroChiamate:number;
}

class User implements iSmartPhone{
    credito: number = 0;  // credito!:number   inizializzo a 0 o uso il !
    numeroChiamate: number = 0;  // il ! comunica che fornirò poi il valore
    costoMinuto:number = 0.2;
    nome:string;
    cognome:string;

    constructor(_nome:string, _cognome:string){
        this.nome = _nome
        this.cognome = _cognome
    }

    set ricarica(n:number){   //il metodo set fa passare il metodo come proprietà, si usa quando "la funzione" non ritorna nulla
        this.credito += n
    }

    chiamata(minutiChiamata:number){   //passo come parametri i minuti passati in chiamata per calcolare il costo della chiamata e sottrarlo al credito
        let costo = this.costoMinuto * minutiChiamata
        this.credito -= costo
        this.numeroChiamate += minutiChiamata  //aggiungo i minuti passati in chiamata alla somma di tutti i minuti passati in chiamata
    }

    get chiama404():string{   //il metodo get fa passare il metodo come proprietà, si usa quando "la funzioone" ritorna un valore
        return `il credito residuo è di ${this.credito}`
    }

    ottieniNumeroChiamate():number{
        return this.numeroChiamate
    }

    azzeraChiamate():void{
        this.numeroChiamate = 0;
    }
}


const user1 = new User ("Pinco", "Pallo")  //Creo un oggetto usando la classe User e passo i parametri del constructor

console.log ("Credito prima della ricarica" , user1.credito); //restituisce 0

user1.ricarica=10
console.log("Credito dopo la ricarica" , user1.credito); //restituisce 10

user1.chiamata(5)

console.log(user1.chiama404)  //9
