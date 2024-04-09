export class BarChart
{
    myColors = ["#99f95e", "#5fd4cf", "#d45fad", "#d4bf5f"];
    shadowColors = ["#629a3f", "#46928f", "#8e3e73","#8a7d41"];
    constructor(daten, myCanvas)
    {
        this.daten = daten;
        this.chartCanvas = myCanvas;
        this.context = myCanvas.getContext("2d");
        this.breite = myCanvas.width;
        this.höhe = myCanvas.height;

    }

    draw()
    {
        this.context.fillStyle = "#b7eae2";
        this.context.fillRect(0, 0, this.breite, this.höhe);

        let colorpicker = 0;
        let i = 25;
        for (let data in this.daten)
        {

            // shadow
            this.context.filter = "drop-shadow(10px 5px 10px " + this.shadowColors[colorpicker] +")";
            this.context.fillStyle = this.shadowColors[colorpicker];
            this.context.beginPath();

            this.context.arc(this.daten[data] * 10 + 20, i * 2 + 10, 10, -0.5 * Math.PI, 0.5 * Math.PI);
            this.context.fill();
            this.context.beginPath();
            this.context.arc(20, i * 2 + 10, 10, 0.5 * Math.PI, -0.5 * Math.PI);
            this.context.fill();
            this.context.fillRect(20, i * 2, this.daten[data] * 10, 20);

            // Lines
            this.context.filter = "none";
            this.context.fillStyle = this.myColors[colorpicker];
            this.context.strokeStyle = this.myColors[colorpicker];
            this.context.beginPath();
            this.context.arc(this.daten[data] * 10 +20, i * 2 + 10, 10, -0.5 * Math.PI, 0.5 * Math.PI);
            this.context.fill();
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(20, i * 2 + 10, 10, 0.5 * Math.PI, -0.5 * Math.PI);
            this.context.fill();
            this.context.stroke();
            this.context.fillRect(20, i * 2, this.daten[data] * 10, 20);
            colorpicker++;


            this.context.fillStyle = "#0f1a10";
            this.context.font = "20px Arial";

            this.context.fillText(data, 10, i * 2 - 10);

            i += 30;
        }
    }

}