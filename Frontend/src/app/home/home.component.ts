import { Component, OnInit } from "@angular/core";
import { DataHomeService } from "./services/dataHome.service";
import { HomeData } from "./homeData";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public data : HomeData;


  constructor(private _data:DataHomeService) {}

  async ngOnInit() {
    this.data = await this._data.findHomeData();
  }

  getNameAz() {
    return this.data.NomeAzienda;
  }

  consumoAz(){
    return this.data.ConsumoAzienda2020;
  }
}
