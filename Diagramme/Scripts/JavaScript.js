
import { BarChart } from "./BarChartModule.js";
import daten from './myData.json' assert { type: 'json' };

window.onload = function ()
{

    const canvas = document.getElementById("myCanvas");
    let bars = new BarChart(daten, canvas);
    bars.draw();


}



//let daten =
//{
//    "C#": 20,
//    "Java": 50,
//    "C++": 30,
//    "JavaScript": 20
//};


//class BarChart
//{
//    constructor(daten, myCanvas)
//    {
//        this.daten = daten;
//        this.chartCanvas = myCanvas;
//        this.context = myCanvas.getContext("2d");
//        this.breite = myCanvas.width;
//        this.höhe = myCanvas.height;

//    }

//    draw()
//    {
//        this.context.fillStyle = "#b7eae2";
//        this.context.fillRect(0, 0, this.breite, this.höhe);

//        let i = 25;
//        for (let data in daten)
//        {
//            //this.context.shadowColor = "#417145";
//            //this.context.shadowBlur = 7;
//            this.context.fillStyle = "#61a86c";
//            this.context.beginPath();

//            this.context.arc(daten[data] * 10 - 1, i * 2 + 10, 10, -0.5 * Math.PI, 0.5 * Math.PI);
//            this.context.fill();
//            this.context.fillRect(0, i * 2, daten[data] * 10, 20);



//            this.context.fillStyle = "#0f1a10";
//            this.context.font = "20px Arial";

//            this.context.fillText(data, 10, i * 2 - 10);

//            i += 30;
//        }
//    }

//}
