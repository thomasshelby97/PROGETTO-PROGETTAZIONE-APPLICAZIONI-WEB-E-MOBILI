import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HomeData } from "../homeData";

@Injectable()
export class DataHomeService {
  constructor(private http: HttpClient) {}

  findHomeData(): Promise<HomeData> {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    };
    return this.http
      .get<HomeData>("http://localhost:4000/homeData", { headers })
      .toPromise();
  }
}
