$(document).ready(function(){

    let rate = 0;
    let bill = 142.55;
    let people = 1;

    let tip = 0;
    let total = 0;

    showResult(bill, rate, people);

    $("#5").click(function(){
        changeColor("5");
        resetColor("10");
        resetColor("15");
        resetColor("25");
        resetColor("50");
        bill = $("#prix").val();
        rate = 0.05; 
        people = $("#nbPeople").val(); 

        tip = (bill * rate) / people;
        total = (bill / people) + tip;

        document.getElementById("tip").innerHTML=(tip).toFixed(2);
        document.getElementById("total").innerHTML=(total).toFixed(2);
    })

    $("#10").click(function(){
        changeColor("10");
        resetColor("5");
        resetColor("15");
        resetColor("25");
        resetColor("50");
        bill = $("#prix").val();
        rate = 0.1; 
        people = $("#nbPeople").val(); 

        tip = (bill * rate) / people;
        total = (bill / people) + tip;

        document.getElementById("tip").innerHTML=(tip).toFixed(2);
        document.getElementById("total").innerHTML=(total).toFixed(2);
    })

    $("#15").click(function(){
        changeColor("15");
        resetColor("10");
        resetColor("5");
        resetColor("25");
        resetColor("50");
        bill = $("#prix").val();
        rate = 0.15;
        people = $("#nbPeople").val(); 

        tip = (bill * rate) / people;
        total = (bill / people) + tip;

        document.getElementById("tip").innerHTML=(tip).toFixed(2);
        document.getElementById("total").innerHTML=(total).toFixed(2);
    })

    $("#25").click(function(){
        changeColor("25");
        resetColor("10");
        resetColor("15");
        resetColor("5");
        resetColor("50");
        bill = $("#prix").val();
        rate = 0.25;  
        people = $("#nbPeople").val(); 

        tip = (bill * rate) / people;
        total = (bill / people) + tip;

        document.getElementById("tip").innerHTML=(tip).toFixed(2);
        document.getElementById("total").innerHTML=(total).toFixed(2);
    })

    $("#50").click(function(){
        changeColor("50");
        resetColor("10");
        resetColor("15");
        resetColor("25");
        resetColor("5");
        bill = $("#prix").val();
        rate = 0.5; 
        people = $("#nbPeople").val(); 

        tip = (bill * rate) / people;
        total = (bill / people) + tip;

        document.getElementById("tip").innerHTML=(tip).toFixed(2);
        document.getElementById("total").innerHTML=(total).toFixed(2);
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

function calculTip (bill, rate){
    return bill * rate;
}

function calculTotal (bill, rate, people){
    return ((bill + (bill * rate))/people);
}

function showResult (bill, rate, people){
    let tip = calculTip(bill, rate);
    console.log("tip par personne : " + (tip/people));
    document.getElementById("tip").innerHTML=(tip/people).toFixed(2);

    let total = calculTotal(bill,rate, people);
    console.log("total par personne : " + total.toFixed(2));
    document.getElementById("total").innerHTML=total.toFixed(2);
}

