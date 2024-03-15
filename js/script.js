/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


function newSquaregrid(content){
    const square =document.createElement('div')
    square.innerHTML ='<span>' + content + '</span>'
    // square.classList.add('box')
    square.classList.toggle('box');
    return square
}
function isEven(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

const button =document.querySelector('.btn')


//  let games =  myFunction();
// console.log(games)

    button.addEventListener('click', function(){
    
        const stContainer =document.querySelector('.st-container')
    
        for (let i=0 ; i<100; i++){
            const newSquare = newSquaregrid(i + 1)
            newSquare.addEventListener('click', function(){
                if(isEven(i + 1)){
                    newSquare.classList.add('bgeven')
                    let even = 'pari';
                    console.log(i + 1 , even)
                }else{
                    newSquare.classList.add('bgodd')
                    let even = 'dispari';
                    console.log(i + 1 , even)
                }
    
            })
            
            stContainer.appendChild(newSquare);
            
        }
    })   


    // function myFunction() {
    //     var element = document.getElementById("myDIV");
    //     element.classList.toggle("mystyle");
    //  }

     

//  function myFunction(){
//     let select= document.getElementById("mySelect").value;    
//     console.log(select)
//     // document.querySelector(".st-container").innerHTML = "You selected: " + selected;
//     return select.value
//  }






    




  


