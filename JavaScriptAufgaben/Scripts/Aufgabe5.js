console.log("\n%cAufgabe 5", 'color: #bada55; font-size: 20px;');

let arr2 = { name: "", anschrift: "", plz: "", ort: "" };

for (let field in arr2)
{
    arr2[field] = prompt(field);
}

let ausgabe = "";
for (let field in arr2)
{
    ausgabe += field;
    ausgabe += ": ";
    ausgabe += arr2[field];
    ausgabe += "\n";
    console.log(`%c${field}` + `%c: ${arr2[field]}`, 'color: lime;', 'color: white;');
}

alert(ausgabe);