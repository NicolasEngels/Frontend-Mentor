$(document).ready(function(){
    $("#d6").hide();

    let rate = 0;
    let bill = 0;
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

    $("#reset").click(function(){
        $("#d6").hide();
        $("#d5").show();
        bill = 0;
        rate = 0; 
        people = 1;
        resetColor("10");
        resetColor("15");
        resetColor("25");
        resetColor("5");
        resetColor("50");

        document.getElementById("tip").innerHTML="0.00";
        document.getElementById("total").innerHTML="0.00";
        $("#prix").val('');
        $("#nbPeople").val('');
    })

    $("#go").click(function(){
        $("#d5").hide();
        $("#d6").show();

        bill = $("#prix").val();
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

