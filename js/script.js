//restart
// function restart() {
//     document.getElementById("x").src="images/blank.png";
//     document.getElementById("xIa").src="images/blank.png";
// }

// shifumi();

// function shifumi(){
    
    //déclaration des variables
    var joueur;
    var jChoice;
    var iaChoice;
    var ia;
    var end;
    end = false;
    
    // if (end == false){
        //le joueur fait son choix et affiche le résultat
        document.addEventListener("click", function choixPierre(){
            document.getElementById("x").src="images/pierre.png";
            joueur = 0;
            jChoice = "pierre";
            console.log("choix du joueur: " +jChoice);
            iaTake();
        });
        document.addEventListener("click", function choixFeuille(){
            document.getElementById("x").src="images/feuille.png";
            joueur = 1;
            jChoice = "feuille";
            console.log("choix du joueur: " +jChoice);
            iaTake();
        });
        document.addEventListener("click", function choixCiseaux(){
            document.getElementById("x").src="images/ciseaux.png";
            joueur = 2;
            jChoice ="ciseaux";
            console.log("choix du joueur: " +jChoice);
            iaTake();
        });
        
        //l'ia fait son choix et affiche le résultat
        function iaTake() {
            ia = Math.floor(Math.random() *3);
            // console.log("ia " +ia);
            // console.log("humain " +joueur);
            printIa()
        }
        
        function printIa() {
            if (ia == 0) {
                document.getElementById("xIa").src="images/pierre.png";
                iaChoice = "pierre";
            }
            else if (ia == 1) {
                document.getElementById("xIa").src="images/feuille.png";
                iaChoice = "feuille";
            }
            else {
                document.getElementById("xIa").src="images/ciseaux.png";
                iaChoice ="ciseaux";
            }
            console.log("choix de l'ia: " +iaChoice);
            compare();
        }
        
        // //comparaison entre les deux choix et affichage du résultat
        function compare() {
            if (joueur == ia) {
                document.getElementById("action").innerHTML = "Le joueur a choisit " +jChoice +"<br>" +" l'IA a choisit " +iaChoice +"<br><br>" +" <strong>ÉGALITÉ</strong>";
                end = true;
            }
            else if ((joueur==0) && (ia==2) || (joueur==1) && (ia==0) || (joueur==2) && (ia==1)){
                document.getElementById("action").innerHTML = "Le joueur a choisit " +jChoice +"<br>" +" l'IA a choisit " +iaChoice +"<br><br>" +" <strong>Vous avez GAGNÉ !</strong>";
                end = true;
            }
            else {
                document.getElementById("action").innerHTML = "Le joueur a choisit " +jChoice +"<br>" +" l'IA a choisit " +iaChoice +"<br><br>" +" <strong>L'IA a GAGNÉ !</strong>";
                end = true;
            }
            console.log("stat of end: " +end);
        }
    // }
//     else {
//         alert("FIN");
//     }
// // }
// function clean(){
// document.getElementById("button").addEventListener("click", function(){
//     document.getElementById("x").src="images/blank.png";
//     document.getElementById("xIa").src="images/blank.png";
//      restart();
//     // document.getElementById("button").innerHTML = "Hello World";
// });}



//nouvelle partie?

// document.getElementById("x").src="images/blank.png";
// document.getElementById("xIa").src="images/blank.png";
