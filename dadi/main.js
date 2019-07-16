//Dichiaro le variabili
var Generatorecasuale, generatoreComputer;


//L'utente clicca sul dado
function myfunction() {
    Generatorecasuale = Math.floor(Math.random() *6) + 1;
    //document.writeln(Generatorecasuale);
    //document.writeln(generatoreComputer);
    console.log(Generatorecasuale);
    console.log(generatoreComputer);
}


//ora il computer sceglie
generatoreComputer = Math.floor(Math.random() *6) + 1;


//ora si confrontano i risultati e si determina il vincitore
if (Generatorecasuale > generatoreComputer){
    document.writeln("Hai vinto!");
}   if (Generatorecasuale == generatoreComputer){
    document.writeln("Sono uguali");
}   else (generatoreComputer > Generatorecasuale)
    document.writeln("Hai perso!");



//console.log(Generatorecasuale);
