window.onload = function ()
{

    //let calc = document.getElementById("calculate").onclick;
    //calc.onclick = calculate;

    document.getElementById("standdard06").onclick = changeSpeed;
    document.getElementById("standdard16").onclick = changeSpeed;
    document.getElementById("standdard50").onclick = changeSpeed;
    document.getElementById("dataSpeed").oninput = typeSpeed;


}
function calculate()
{

}

function changeSpeed()
{
    if (document.getElementById("standdard06").checked)
    {
        console.log(document.getElementById("standdard06").value);

    }
    if (document.getElementById("standdard16").checked)
    {
        console.log(document.getElementById("standdard16").value);
    }
    if (document.getElementById("standdard50").checked)
    {
        console.log(document.getElementById("standdard50").value);
    }
}
function typeSpeed()
{

}