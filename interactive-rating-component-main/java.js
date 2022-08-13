$(document).ready(function(){
    $("#state").hide();

    let rate = 0;

    $("#b1").click(function(){
        changeColor("b1");
        resetColor("b2");
        resetColor("b3");
        resetColor("b4");
        resetColor("b5");
        rate = 1;  
    })

    $("#b2").click(function(){
        changeColor("b2");
        resetColor("b1");
        resetColor("b3");
        resetColor("b4");
        resetColor("b5");
        rate = 2;  
    })

    $("#b3").click(function(){
        changeColor("b3");
        resetColor("b2");
        resetColor("b1");
        resetColor("b4");
        resetColor("b5");
        rate = 3;  
    })

    $("#b4").click(function(){
        changeColor("b4");
        resetColor("b2");
        resetColor("b3");
        resetColor("b1");
        resetColor("b5");
        rate = 4;  
    })

    $("#b5").click(function(){
        changeColor("b5");
        resetColor("b2");
        resetColor("b3");
        resetColor("b4");
        resetColor("b1");
        rate = 5; 
    })

    $("#submit").click(function(){
        $("#state").show();
        $("#rating").hide();
        document.getElementById("rated").innerHTML=rate;
    })
})
function changeColor (rate){
    document.getElementById(rate).style.color = 'hsl(0, 0%, 100%)';
    document.getElementById(rate).style.backgroundColor = 'hsl(217, 12%, 63%)';
}

function resetColor (bouton){
    document.getElementById(bouton).style.color = 'hsl(217, 12%, 63%)';
    document.getElementById(bouton).style.backgroundColor = 'hsl(213, 19%, 22%)';
}

