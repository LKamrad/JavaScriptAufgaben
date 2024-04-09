class Backwaren
{
    constructor(bezeichnung, verkaufspreis)
    {
        this.bezeichnung = bezeichnung;
        this.verkaufspreis = verkaufspreis;
    }

    toString()
    {
        return "Name: " + this.bezeichnung + " Preis: " + this.verkaufspreis + " €";
    }
    

    ausgabe()
    {
        console.log(this.toString());
    }
}

class Konditoreiware extends Backwaren
{
    // Kühltemperatur
    // Mindesthaltbarkeitsdatum
    constructor(bezeichnung, verkaufspreis, kuhltemp, mindDatum)
    {
        super(bezeichnung, verkaufspreis);
        this.kuhltemp = kuhltemp;
        this.produktDate = new Date(mindDatum);
    }
    toString()
    {
       
        return super.toString() + " Temp: " + this.kuhltemp + "°, Mdh bis: " + this.produktDate.toDateString();
    }

    ausgabe()
    {
        console.log(this.toString());
    }
}

class Brot extends Backwaren
{
    constructor(bezeichnung, verkaufspreis, gewicht, mehlsorte)
    {
        super(bezeichnung, verkaufspreis);
        this.gewicht = gewicht;
        this.mehlsorte = mehlsorte;
    }
    

    toString()
    {
        return super.toString() + " Gewicht: " + this.gewicht + " Gramm, Mehlsorte: " + this.mehlsorte;
    }

    ausgabe()
    {
        console.log(this.toString());
    }
}

class Frühstücksbackwerk extends Backwaren
{
    constructor(bezeichnung, verkaufspreis, abkühldauer)
    {
        super(bezeichnung, verkaufspreis);
        this.abkühldauer = abkühldauer;

    }
    toString()
    {
        return super.toString() + " Abkühldauer: " + this.abkühldauer + " Minuten";
    }

    ausgabe()
    {
        console.log(this.toString());
    }
}
class Salzbackware extends Frühstücksbackwerk
{

    constructor(bezeichnung, verkaufspreis, abkühldauer, salzgehalt)
    {
        super(bezeichnung, verkaufspreis, abkühldauer);
        this.salzgehalt = salzgehalt;

    }
    toString()
    {
        return super.toString() + " Salzgehalt: " + this.salzgehalt + "%";
    }

    ausgabe()
    {
        console.log(this.toString());
    }
}
class Süßbackware extends Frühstücksbackwerk
{
    constructor(bezeichnung, verkaufspreis, abkühldauer, zuckergehalt, lagertemperatur)
    {
        super(bezeichnung, verkaufspreis, abkühldauer);
        this.zuckergehalt = zuckergehalt;
        this.lagertemperatur = lagertemperatur;

    }
    toString()
    {
        return super.toString() + " Zuckergehalt: " + this.zuckergehalt + "% Lagertemperatur: " + this.lagertemperatur + "°";
    }

    ausgabe()
    {
        console.log(this.toString());
    }
}


const kuchen = new Konditoreiware("Kuchen", 1.59, 12, "01.01.2021");
kuchen.ausgabe();
const brot = new Brot("Graubrot", 2.99, 500, "Weizenmehl");
brot.ausgabe();
const brezel = new Salzbackware("Brezel", 0.59, 90, 9);
brezel.ausgabe();
const berliner = new Süßbackware("Berliner", 1.39, 60, 18, 13);
berliner.ausgabe();

