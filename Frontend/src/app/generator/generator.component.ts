import { Component, AfterViewInit } from "@angular/core";
import { DataService } from "./services/data.service";
import { Generatore } from "./generatore";
import { Chart } from "chart.js";

@Component({
  selector: "app-generator",
  templateUrl: "./generator.component.html",
  styleUrls: ["./generator.component.css"],
})
export class GeneratorComponent implements AfterViewInit {
  public generators: Generatore[];
  public rendimentoElettrico: any[];
  public intervalIndex: any;

  constructor(private _data: DataService) {
    this.intervalIndex = 5;
  }
  charts = ["chart1", "chart2", "chart3"];

  async ngAfterViewInit() {
    this.generators = await this._data.findData();

    var chart1 = new Chart("chart0", {
      type: "doughnut",

      data: {
        labels: ["Carichi Parziali", "Carichi totali"],
        datasets: [
          {
            data: [
              parseInt(this.generators[4].percent_carichi_parziali),
              100 - parseInt(this.generators[4].percent_carichi_parziali),
            ],
            backgroundColor: [
              "rgba(0,128,128, 1.9)",
              "rgba(255, 206, 86, 0.4)",
            ],
            borderColor: ["rgba(0, 0, 0)", "rgba(0, 0, 0)"],
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: ["%CARICHI PARZIALI", this.generators[4].data_ora],
          fontSize: 30,
          padding: 15,
        },
      },
    });

    var chart2 = new Chart("chart1", {
      type: "line",

      data: {
        labels: [
          this.generators[0].data_ora,
          this.generators[1].data_ora,
          this.generators[2].data_ora,
          this.generators[3].data_ora,
          this.generators[4].data_ora,
        ],
        datasets: [
          {
            data: [
              parseInt(this.generators[0].rendimento_elettrico),
              parseInt(this.generators[1].rendimento_elettrico),
              parseInt(this.generators[2].rendimento_elettrico),
              parseInt(this.generators[3].rendimento_elettrico),
              parseInt(this.generators[4].rendimento_elettrico),
            ],
            label: "Rendimento elettrico",
            borderColor: "#3e95cd",
            fill: true,
          },
          {
            data: [
              parseInt(this.generators[0].rendimento_termico),
              parseInt(this.generators[1].rendimento_termico),
              parseInt(this.generators[2].rendimento_termico),
              parseInt(this.generators[3].rendimento_termico),
              parseInt(this.generators[4].rendimento_termico),
            ],
            label: "Rendimento termico",
            borderColor: "#8e5ea2",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "RENDIMENTO TERMICO ED ELETTRICO",
          fontSize: 30,
          padding: 15,
        },
      },
    });

    var chart3 = new Chart("chart2", {
      type: "bar",
      data: {
        labels: ["Energia Termica", "Energia Elettrica"],
        datasets: [
          {
            data: [
              parseFloat(this.generators[0].energia_termica_prodotta_kWh),
              parseFloat(this.generators[0].energia_elettrica_prodotta_khw),
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: [
            "ENERGIA TERMICA ED ELETTRICA PRODOTTA",
            this.generators[0].data_ora,
          ],
          fontSize: 30,
          padding: 15,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    setInterval(() => {
      this.addDataLine(chart2, this.generators[this.intervalIndex].data_ora);

      this.addDataPie(chart1, this.generators[this.intervalIndex].data_ora);

      this.addDataBar(chart3, this.generators[this.intervalIndex].data_ora);

      this.intervalIndex++;
    }, 2000);
  }
  addDataPie(chart, title) {
    var data = [
      parseInt(this.generators[this.intervalIndex].percent_carichi_parziali),
      100 -
        parseInt(this.generators[this.intervalIndex].percent_carichi_parziali),
    ];
    if (title != null) {
      chart.options.title.text[1] = title;
    }
    chart.data.datasets[0].data = data;
    chart.update();
  }

  addDataLine(chart, label) {
    var data = [
      parseInt(this.generators[this.intervalIndex].rendimento_elettrico),
      parseInt(this.generators[this.intervalIndex].rendimento_termico),
    ];

    chart.data.labels.push(label);
    chart.data.labels.shift();

    for (var i = 0; i < data.length; i++) {
      chart.data.datasets[i].data.shift();
      chart.data.datasets[i].data.push(data[i]);
    }
    chart.update();
  }

  addDataBar(chart, title) {
    var data = [
      parseFloat(
        this.generators[this.intervalIndex].energia_termica_prodotta_kWh
      ),
      parseFloat(
        this.generators[this.intervalIndex].energia_elettrica_prodotta_khw
      ),
    ];

    if (title != null) {
      chart.options.title.text[1] = title;
    }
    chart.data.datasets[0].data = data;

    chart.update();
  }

  increase() {
    this.intervalIndex += 15;
  }
  decrease() {
    if (this.intervalIndex - 15 < 5) this.intervalIndex = 5;
    else this.intervalIndex -= 15;
  }
}
