window.onload = function ()
{
    let aufgabe1 = document.getElementById("ggtButton");

    aufgabe1.onclick = ggtKgt;


    let aufgabe2 = document.getElementById("deciCalculateButton");

    aufgabe2.onclick = toBinary;

    let aufgabe21 = document.getElementById("toDeciCalculateButton");

    aufgabe21.onclick = toDecimal;

    let aufgabe3 = document.getElementById("isbnCheckButton");

    aufgabe3.onclick = isbnChecker;


}


function ggtKgt()
{
    if (document.getElementById("radioGGT").checked)
    {
        document.getElementById("ggtOutput").value = ggt();
    }
    else
    {

        document.getElementById("ggtOutput").value = kgv();
    }
    
}

function ggt()
{
    let ggt1 = document.getElementById("ggt1").value;
    let ggt2 = document.getElementById("ggt2").value;
    console.log("ggt1: " + ggt1 + "ggt2: " + ggt2);
    if (ggt1 < 0 || ggt2 < 0)
    {
        document.getElementById("ggtOutput").value = "One of the inputs is less than 0";
    }
    else if (ggt1 == 0 || ggt2 == 0)
    {
        document.getElementById("ggtOutput").value = 0;
    }
    else if (ggt1 == 1 || ggt2 == 1)
    {
        document.getElementById("ggtOutput").value = "1";
    }
    else
    {
        let temp;
        do
        {
            console.log("ggt1: " + ggt1 + "ggt2: " + ggt2);
            ggt1 = ggt1 % ggt2;
            temp = ggt2;
            ggt2 = ggt1;
            ggt1 = temp;

        } while (ggt1 > 1 && ggt2 > 1);
        console.log("ggt1: " + ggt1 + "ggt2: " + ggt2);
        console.log("temp: " + temp);
        return ggt1;
        
    }
}
function kgv()
{
    let kgv1 = document.getElementById("ggt1").value;
    let kgv2 = document.getElementById("ggt2").value;

    return kgv1 * kgv2 / ggt();


}

function toBinary()
{

    let kgv1 = document.getElementById("deci").value;

    

    if (document.getElementById("radioBin").checked)
    {
        document.getElementById("binOctaHexResult").value = Number(kgv1).toString(2);
    }
    else if (document.getElementById("radioOcta").checked)
    {
        document.getElementById("binOctaHexResult").value = Number(kgv1).toString(8);
    }
    else
    {

        document.getElementById("binOctaHexResult").value = Number(kgv1).toString(16);
    }
}

function toDecimal()
{

    let thisIsNotDeci = document.getElementById("notDeci").value;



    if (document.getElementById("radioFromBin").checked)
    {
        document.getElementById("deciResult").value = parseInt(thisIsNotDeci,2);
    }
    else if (document.getElementById("radioFromOcta").checked)
    {
        document.getElementById("deciResult").value = parseInt(thisIsNotDeci, 8);
    }
    else
    {

        document.getElementById("deciResult").value = parseInt(thisIsNotDeci, 16);
    }
}

function isbnChecker()
{
    let isbn = document.getElementById("isbn").value;
    isbn = isbn.replace(/[.*-.*]/g, '');

    const isbnArr = isbn.split("");

    if (isbnArr.length != 10)
    {
        document.getElementById("isbnResult").value = "Ungültig";
    }
    else
    {
        let summe = 0;

        for (let i = 0; i < 10; i++)
        {
            summe += (i + 1) * isbnArr[i];
        }

        if (summe % 11 == 0)
        {
            document.getElementById("isbnResult").value = "Gültig";
        }
        else
        {
            document.getElementById("isbnResult").value = "Ungültig";
        }
        

        
    }

}