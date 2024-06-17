// creo gioco in cui compaiono 5 numeri diversi, dopo 30 secondi scompaiono e l'utente digita i numeri che ha visto, dopo dico quanti e quali sono giusti
const btnPlay = document.getElementById("play");
// creo click per iniziare gioco e avviare il timer
btnPlay.addEventListener ('click',
    function () {
        
        // compaiono 5 numeri diversi
        
            const genNum = []
        
            while (genNum.length < 5) {
                
                // creo numero random da 1 a 1000
                let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
                // evito che esca lo stesso numero
                if (!genNum.includes(randomNumber)) {
                    genNum.push(randomNumber)
                }
            }
        
            console.log(genNum);
        

    
        // dopo 30 secondi scompaiono e l'utente digita i numeri che ha visto
        setTimeout(userNum, 3000);

        function userNum() {
            const userNum = [];
            for (let i = 0; i < genNum.length; i++) {
                let userInput = parseInt(prompt("digita i numeri che hai visto"));
                userNum.push(userInput);
                console.log(userNum);
            }
        }

        // dico quanti e quali sono giusti
        
        
    }
    
)