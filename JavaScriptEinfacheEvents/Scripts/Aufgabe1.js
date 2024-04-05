
window.onload = function () 
{
    //------------------------------------
    // Augfgabe 1
    let backgroundChanger = document.getElementById("myButton");

    backgroundChanger.onclick = Aufgabe1ButtonClicked;
    // Augfgabe 2
    let hallowelt = document.getElementById("buttonAufgabe");

    hallowelt.onclick = writeHalloWelt;

    // Augfgabe 3 und 4
    let afg3 = document.getElementById("aufgabe3");

    afg3.onmouseover = function ()
    {
        changePictureToQueen(afg3)
    };
    afg3.onmouseout = function ()
    {
        changePictureToKing(afg3);
    }
    afg3.onmousedown = function ()
    {
        changePictureToBlack(afg3);
    }


    //------------------------------------
    // Augfgabe 5

    let afg5 = document.getElementById("Nettobetrag");

    afg5.oninput = function ()
    {
        changeBruttoSteuer(afg5)
    };


}


//------------------------------------
// Augfgabe 1

function Aufgabe1ButtonClicked()
{
    let bgc = document.getElementsByTagName("body")[0].style.backgroundColor; 
    if (bgc === "red")
    {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";

    }
    else
    {
        document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    }
    //document.getElementsByTagName("body")[0].style.backgroundColor = "red";

}
//------------------------------------
// Augfgabe 2

function writeHalloWelt()
{
    document.querySelector('input[name="name"]').value = "Hallo Welt";
}
//------------------------------------
// Augfgabe 3 und 4

function changePictureToQueen(afg)
{
    afg.src = "img/Queen_w.png";
}
function changePictureToKing(afg)
{
    afg.src = "img/King_w.png";
}

function changePictureToBlack(afg)
{
    afg.src = "img/Queen.png";
}

//------------------------------------
// Augfgabe 5

function changeBruttoSteuer(afg)
{
    document.getElementById("Bruttobetrag").value = Math.floor(afg.value * 1.18);
    document.getElementById("Steuerbetrages").value = Math.floor(afg.value * 0.18);
}
