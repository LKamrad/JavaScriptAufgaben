window.onload = function ()
{
    let flagChoice = document.getElementById("flags");
    const canvas = document.getElementById("myCanvas");
    let myFlag = new Flag(canvas);

    //let kids = Array.from(flagChoice.children).sort(function (a, b)
    //{
    //    a.textContent = a.textContent.replace(/Ö/g, 'Oe');
    //    b.textContent = b.textContent.replace(/Ö/g, 'Oe');
    //    a.textContent = a.textContent.replace(/Ä/g, 'Ae');
    //    b.textContent = b.textContent.replace(/Ä/g, 'Ae');
    //    a.textContent = a.textContent.replace(/Ü/g, 'Ue');
    //    b.textContent = b.textContent.replace(/Ü/g, 'Ue');
    //    console.log(a.textContent + " " + b.textContent);
    //    if (a.textContent < b.textContent)
    //    {
    //        return -1;
    //    }
    //    if (a.textContent > b.textContent)
    //    {
    //        return 1;
    //    }
    //    return 0;
    //});

    let kids = Array.from(flagChoice.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
    
    while (flagChoice.firstChild)
    {
        flagChoice.removeChild(flagChoice.lastChild);
    }

    for (let k = 0; k < kids.length; k++)
    {

        //kids[k].textContent = kids[k].textContent.replace(/Oe/gi, 'Ö');
        //kids[k].textContent = kids[k].textContent.replace(/Ae/gi, 'Ä');
        //kids[k].textContent = kids[k].textContent.replace(/Ue/gi, 'Ü');
        kids[k].index = k;
        flagChoice.appendChild(kids[k]);
    }

    flagChoice.children = kids;

    


    let colorPallete = flagChoice.selectedOptions[0].value.toString().split(' ');
    if (colorPallete[3] == 0)
    {
        myFlag.drawFlagVertical(colorPallete);
    } else
    {
        myFlag.drawFlagHorizontal(colorPallete);
    }

    flagChoice.onchange = function ()
    {
        let colorPallete = flagChoice.value.toString().split(' ');
        if (colorPallete[3] == 0)
        {
            myFlag.drawFlagVertical(colorPallete);
        } else
        {
            myFlag.drawFlagHorizontal(colorPallete);
        }
    }


}



class Flag
{
    constructor(flagCanvas)
    {
        this.canvas = flagCanvas;
        this.context = myCanvas.getContext("2d");
        this.breite = myCanvas.width;
        this.höhe = myCanvas.height;
    }
    drawBorder()
    {

    }
    drawFlagVertical(colorPallete)
    {
        for (let i = 0; i < 3; i++)
        {
            this.context.fillStyle = colorPallete[i];

            this.context.fillRect(0, i * this.höhe / 3, this.breite, this.höhe / 3);
        }

    }
    drawFlagHorizontal(colorPallete)
    {
        for (let i = 0; i < 3; i++)
        {
            this.context.fillStyle = colorPallete[i];

            this.context.fillRect(i * this.breite / 3, 0, this.breite / 3, this.höhe );
        }

    }

}
// horizontal

/*
--Deutschland #000000 #FF0000 #FFCC00
--Litauen #FDB913 #006A44 #C1272D
--Bulgarien #FFFFFF #009900 #CC0000
--Estland blue black white
--Luxemburg  	#EF3340 #FFFFFF #00A3E0
--Niederlande #AD1D25 #FFFFFF #1E4785
--Österreich red white red
--Ungarn #CE2939 #FFFFFF #477050
*/
//vertical

/*
--Belgien #000000 	#FDDA24  #EF3340 
--Frankreich #0055A4 #FFFFFF #EF4135 
--Italien #008C45 #F4F5F0 #CD212A
--Irland #169B62 #FFFFFF #FF883E
--Rumänien #002B7F  #FCD116  #CE1126 
*/