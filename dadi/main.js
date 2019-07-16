
//Dichiaro le variabili
var generatoreCasuale, generatoreComputer;


//L'utente clicca sul dado
    generatoreCasuale = Math.floor(Math.random() *6) + 1;
    //document.writeln(Generatorecasuale);
    //document.writeln(generatoreComputer);
    console.log(generatoreCasuale);
    
    //ora il computer sceglie
    generatoreComputer = Math.floor(Math.random() *6) + 1;
    console.log(generatoreComputer);

    if (generatoreCasuale > generatoreComputer){
        document.writeln("Hai vinto!");
    
    }  else if (generatoreCasuale == generatoreComputer){
        document.writeln("Sono uguali");
    }  else if (generatoreComputer > generatoreCasuale)
        document.writeln("Hai perso!");




//ora si confrontano i risultati e si determina il vincitore




//console.log(Generatorecasuale);
