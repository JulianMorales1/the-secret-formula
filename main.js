let entry = document.querySelector('#userInput');
let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    alert(entry.value);
})

////////////////////////////////////////////////////

let formTwo = document.querySelector("#formTwo");
let wheat = document.querySelector('#wheat');
let rye = document.querySelector('#rye');
let white = document.querySelector('#white');
let sourdough = document.querySelector('#sourdough');
let lettuce = document.querySelector('#lettuce');
let tomato = document.querySelector('#tomato');
let mayo = document.querySelector('#mayo');
let mozarella = document.querySelector('#mozarella');
let provolone = document.querySelector('#provolone');
let cheddar = document.querySelector('#cheddar');
let turkey = document.querySelector('#turkey');
let chicken = document.querySelector('#chicken');
let ham = document.querySelector('#ham');

formTwo.addEventListener("submit", function(event){
    let sandwhich = "";

    if(wheat.checked === true){
        sandwhich += " " + "Wheat";
    }
    if(rye.checked === true){
        sandwhich += " " + "Rye";
    }
    if(white.checked === true){
        sandwhich += " " + "White";
    }
    if(sourdough.checked === true){
        sandwhich += " " + "Sourdough";
    }
    if(lettuce.checked === true){
        sandwhich += " " + "Lettuce";
    }
    if(tomato.checked === true){
        sandwhich += " " + "Tomato";
    }
    if(mayo.checked === true){
        sandwhich += " " + "Mayo";
    }
    if(mozarella.checked === true){
        sandwhich += " " + "Mozarella";
    }
    if(provolone.checked === true){
        sandwhich += " " + "Provolone";
    }
    if(cheddar.checked === true){
        sandwhich += " " + "Cheddar";
    }
    if(turkey.checked === true){
        sandwhich += " " + "Turkey";
    }
    if(chicken.checked === true){
        sandwhich += " " + "Chicken";
    }
    if(ham.checked === true){
        sandwhich += " " + "Ham";
    }
    alert("Your Sandwhich is:" + sandwhich);
    })

///////////////////////////////////////////////////

let formThree = document.querySelector('#formThree')
let date = document.querySelector('#inputDate')
let stylist = document.querySelector('#inputStylist')
let long = document.querySelector('#long')
let short = document.querySelector('#short')


formThree.addEventListener("submit", function(event){

    let hairType = "";

    if(long.checked === true)
    hairType += "long";
    if(short.checked === true)
    hairType += "short";

    alert("Haircut scheduled for" + " " + date.value + " " + "with" + " " + stylist.value + " " +  "for" + " " + hairType + " " + "hair.")
})

///////////////////////////////////////////////////

let formFour = document.querySelector("#formFour");
let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');

formFour.addEventListener('submit', function(event){
  
    alert(userName.value + ' ' + 'has created an account with the following email address'+ ' ' + userEmail.value + '.')
})
