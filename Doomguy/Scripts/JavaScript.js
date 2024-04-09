

class Doomguy
{
    constructor(canvas)
    {
        this.damage = -1;
        this.reversed = false;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.img = document.getElementById("bild_id");

    }
    startAnimation()
    {
        for (let i = 0; i <= 1000; i++)
        {
            setTimeout(() => this.drawDoomguy(i), 1000 * i);
        }
    }
    drawDoomguy(picturenumber)
    {

        if (picturenumber % 12 == 0)
        {
            if (this.reversed)
            {
                this.damage--;
                if (this.damage < 0)
                {
                    this.damage = 1;
                    this.reversed = false;
                }
            }
            else
            {
                this.damage++;
                if (this.damage > 4)
                {
                    this.damage = 3;
                    this.reversed = true;
                }
            }

        }
        //console.log(this.damage);
        if (picturenumber % 4 == 3)
        {
            picturenumber = 1
        }
        this.context.drawImage(this.img, picturenumber % 4 * 234 / 3, this.damage * 514 / 5, 234, 514, 0, 0, 300, 500);
    }
}


let canvas = document.getElementById("myCanvas");
let dg = new Doomguy(canvas);
dg.startAnimation();

