import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/home", title: "Home", icon: "pe-7s-home", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  classi: any[];

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    var response = await this.findClassi();
    this.classi = response[0].classi;

    if (ROUTES.length == 1) {
      for (var i = 1; i < this.classi.length + 1; i++) {
        ROUTES.push({
          path: "/" + this.classi[i - 1],
          title: this.classi[i - 1],
          icon: "pe-7s-graph",
          class: "",
        });
      }
    }

    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  findClassi(): Promise<any> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http
      .get<any>("http://localhost:4000/classi", { headers })
      .toPromise();
  }
}
