import { AfterViewInit, Component } from "@angular/core";
import { DataAssorbitoreService } from "app/assorbitore/services/data-assorbitore.service";
import { Assorbitore } from "./assorbitore";
import { Chart } from "chart.js";

@Component({
  selector: "app-assorbitore",
  templateUrl: "./assorbitore.component.html",
  styleUrls: ["./assorbitore.component.css"],
})
export class AssorbitoreComponent implements AfterViewInit {
  public absorber: Assorbitore[];
  public lineChartIndex: any;
  public barChartIndex: any;

  constructor(private _data: DataAssorbitoreService) {
    this.lineChartIndex = 5;
    this.barChartIndex = 3;
  }
  charts = ["chart", "table"];

  async ngAfterViewInit() {
    this.absorber = await this._data.findData();

    var chart1 = new Chart("chart0", {
      type: "bar",

      data: {
        labels: [
          this.absorber[0].data_ora,
          this.absorber[1].data_ora,
          this.absorber[2].data_ora,
        ],
        datasets: [
          {
            label: "Energia frigorifera prodotta",
            data: [
              this.absorber[0].Energia_frigorifera_prodotta,
              this.absorber[1].Energia_frigorifera_prodotta,
              this.absorber[2].Energia_frigorifera_prodotta,
            ],
            backgroundColor: "#B22222",
          },
          {
            label: "Energia termica dispersa",
            data: [
              this.absorber[0].Energia_termica_dispersa,
              this.absorber[1].Energia_termica_dispersa,
              this.absorber[2].Energia_termica_dispersa,
            ],
            backgroundColor: "#FFFF00",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        title: {
          display: true,
          text: "ENERGIA TERMICA CONSUMATA",
          fontSize: 30,
          padding: 15,
        },

        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }],
        },
      },
    });

    var chart2 = new Chart("chart1", {
      type: "line",

      data: {
        labels: [
          this.absorber[0].data_ora,
          this.absorber[1].data_ora,
          this.absorber[2].data_ora,
          this.absorber[3].data_ora,
          this.absorber[4].data_ora,
        ],
        datasets: [
          {
            data: [
              parseFloat(this.absorber[0].percent_rendimento),
              parseFloat(this.absorber[1].percent_rendimento),
              parseFloat(this.absorber[2].percent_rendimento),
              parseFloat(this.absorber[3].percent_rendimento),
              parseFloat(this.absorber[4].percent_rendimento),
            ],
            label: "Rendimento Assorbitore",
            borderColor: "#3e95cd",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Percentuale Rendimento Assorbitore",
          fontSize: 30,
          padding: 15,
        },
      },
    });
    setInterval(() => {
      this.addDataBar(chart1);
      this.addDataLine(chart2);
    }, 2000);
  }

  addDataBar(chart) {
    chart.data.labels.shift();
    chart.data.labels.push(this.absorber[this.barChartIndex].data_ora);
    chart.data.datasets[0].data.shift();
    chart.data.datasets[0].data.push(
      this.absorber[this.barChartIndex].Energia_frigorifera_prodotta
    );
    chart.data.datasets[1].data.shift();
    chart.data.datasets[1].data.push(
      this.absorber[this.barChartIndex].Energia_termica_dispersa
    );

    this.barChartIndex++;

    chart.update();
  }

  addDataLine(chart) {
    chart.data.labels.shift();
    chart.data.labels.push(this.absorber[this.lineChartIndex].data_ora);
    chart.data.datasets[0].data.shift();
    chart.data.datasets[0].data.push(
      this.absorber[this.lineChartIndex].percent_rendimento
    );
    this.lineChartIndex++;

    chart.update();
  }

  increase() {
    this.lineChartIndex += 15;
    this.barChartIndex += 15;
  }
  decrease() {
    if (this.lineChartIndex - 15 < 5) this.lineChartIndex = 5;
    else this.lineChartIndex -= 15;

    if (this.barChartIndex - 15 < 3) this.barChartIndex = 3;
    else this.barChartIndex -= 15;
  }
}
