$(document).ready(function(){
    let rate = 0;

    $("#5").click(function(){
        changeColor("5");
        resetColor("10");
        resetColor("15");
        resetColor("25");
        resetColor("50");
        rate = 0.05;  
    })

    $("#10").click(function(){
        changeColor("10");
        resetColor("5");
        resetColor("15");
        resetColor("25");
        resetColor("50");
        rate = 0.1;  
    })

    $("#15").click(function(){
        changeColor("15");
        resetColor("10");
        resetColor("5");
        resetColor("25");
        resetColor("50");
        rate = 0.15;  
    })

    $("#25").click(function(){
        changeColor("25");
        resetColor("10");
        resetColor("15");
        resetColor("5");
        resetColor("50");
        rate = 0.25;  
    })

    $("#50").click(function(){
        changeColor("50");
        resetColor("10");
        resetColor("15");
        resetColor("25");
        resetColor("5");
        rate = 0.5; 
    })
})

function changeColor (rate){
    document.getElementById(rate).style.color = 'hsl(183, 100%, 15%)';
    document.getElementById(rate).style.backgroundColor = 'hsl(172, 67%, 45%)';
}

function resetColor (bouton){
    document.getElementById(bouton).style.color = 'hsl(0, 0%, 100%)';
    document.getElementById(bouton).style.backgroundColor = 'hsl(183, 100%, 15%)';
}

let bill = 142.55;

let people = 5;

function calculTip (bill, rate, people){
    return (bill * rate)/people;
}

console.log(calculTip(bill, 0.15, people));