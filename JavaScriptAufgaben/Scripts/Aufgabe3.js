console.log("\n%cAufgabe 3", 'color: #bada55; font-size: 20px;');

let deineName = prompt("Name", "name");

let isDu = confirm("Für Du bestätigen");

if (isDu)
{
    alert(`Du bist ${deineName}`);
    console.log(`Du bist ${deineName}`);

}
else
{
    alert(`Sie sind ${deineName}`);
    console.log(`Sie sind ${deineName}`);
}
