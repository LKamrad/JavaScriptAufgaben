console.log("\n%cAufgabe 4", 'color: #bada55; font-size: 20px;');

let arr = ["D", "C", "B", "A"];

console.log("\nOhne sort");
for (let x of arr)
{
    console.log(x);
}
arr.sort();

console.log("\nNach dem sort");
for (let x of arr)
{
    console.log(x);
}