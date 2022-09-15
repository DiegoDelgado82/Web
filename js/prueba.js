



function cambiarColorMenu(color)
{
    document.getElementById("barra").style.background=color;
    document.getElementsByClassName("navbar-dark").style.color="yellow";
    document.getElementsByClassName("navbar-nav").style.color="yellow";
    document.getElementsByClassName("nav-link").style.color="yellow";
     
   
    
     
    
}


function popUp1()
{
    
    if(document.getElementById("pantallaEmergente1").style.visibility=="hidden")
    {
        document.getElementById("pantallaEmergente1").style.visibility="visible"
        document.getElementById("pLogistico").style.visibility="hidden"
    }
    else{
        document.getElementById("pantallaEmergente1").style.visibility="hidden"
        document.getElementById("pLogistico").style.visibility="visible"
    }
}


function popUp2()
{
    
    if(document.getElementById("pantallaEmergente2").style.visibility=="hidden")
    {
        document.getElementById("pantallaEmergente2").style.visibility="visible"
    }
    else{
        document.getElementById("pantallaEmergente2").style.visibility="hidden"
    }
}

function popUp3()
{
    
    if(document.getElementById("pantallaEmergente3").style.visibility=="hidden")
    {
        document.getElementById("pantallaEmergente3").style.visibility="visible"
    }
    else{
        document.getElementById("pantallaEmergente3").style.visibility="hidden"
    }
}

function popUp4()
{
    
    if(document.getElementById("pantallaEmergente4").style.visibility=="hidden")
    {
        document.getElementById("pantallaEmergente4").style.visibility="visible"
    }
    else{
        document.getElementById("pantallaEmergente4").style.visibility="hidden"
    }
}