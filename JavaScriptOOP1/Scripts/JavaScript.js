class Punkt
{

    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    toString()
    {
        return `X: ${this.x} Y: ${this.y}`;
    }
    log()
    {
        console.log(this.toString());
    }

    getClassName()
    {
        return this.constructor.name;
    }
    getDistanceFrom(p)
    {

        if (p.getClassName() === this.getClassName())
        {
            let a = Math.pow(p.x - this.x, 2);
            let b = Math.pow(p.y - this.y, 2);

            return Math.sqrt(a + b);
        }
        return 0;
    }
    getDistance()
    {
        const punkt = new Punkt(0, 0);
        return this.getDistanceFrom(punkt);
    }

}

console.log("Aufgabe 1");
const p1 = new Punkt(1, 1);
const p2 = new Punkt(10, 10);
const p3 = new Punkt(0, 0);
console.log(p1.toString());
p2.log();
console.log(p1.getDistance());
console.log(p2.getDistanceFrom(p1));

class Linie
{
    constructor(x1, y1, x2, y2)
    {
        this.punkt1 = new Punkt(x1, y1);
        this.punkt2 = new Punkt(x2, y2);
    }

    log()
    {

        console.log(this.toString());
    }
    length()
    {
        return this.punkt1.getDistanceFrom(this.punkt2);
    }
    toString()
    {
        return "Punkt1: " + this.punkt1.toString() + " Punkt2: " + this.punkt2.toString();

    }
}
console.log("Aufgabe 2");
const linie = new Linie(1, 1, 10, 10);
alert(linie.toString());
linie.log();
console.log(linie.length());