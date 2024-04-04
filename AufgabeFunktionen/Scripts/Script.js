
function probability(a)
{

    let arr = [0, 0, 0, 0, 0, 0]

    for (let i = 0; i < a; i++)
    {
        let wurfel = Math.random() * 6;
        let z = Math.floor(wurfel);
        arr[z]++;
    }
    return arr;
}
function ausgabe(wurfe, ...numbers)
{
    console.log("Würfelstatistik");
    console.log(`Bei ${wurfe} Würfen entfielen`);
    for (let i in numbers)
    {
        console.log("auf die 1: "+ i +" Würfe");
    }
}

let wurfe = prompt("Würzelwürfe", "");


let result = probability(wurfe);

ausgabe(wurfe, result);