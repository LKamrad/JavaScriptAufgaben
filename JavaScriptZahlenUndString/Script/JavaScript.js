window.onload = function ()
{
    let aufgabe1 = document.getElementById("ggtButton");



    if (document.getElementById("radioGGT").checked)
    {
        aufgabe1.onclick = ggt;
        aufgabe1.onclick - kgt;
    }
    else
    {
        aufgabe1.onclick = kgt;
        aufgabe1.onclick - ggt;
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
        document.getElementById("ggtOutput").value = ggt1;
    }


}
function kgt()
{
    
}