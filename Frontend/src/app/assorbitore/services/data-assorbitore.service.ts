import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Assorbitore } from "../assorbitore";

@Injectable()
export class DataAssorbitoreService {

    private _url: string = '../app/assorbitore/data/data-assorbitore.json';

  constructor(private http: HttpClient) {}

  

  findData(): Promise<Assorbitore[]>{
    const headers = { 'Authorization': 'Bearer '+ sessionStorage.getItem('token')};
    return  this.http.post<Assorbitore[]>('http://localhost:4000/getType',{classe: 'assorbitore'} ,{ headers }).toPromise();
  }
 
}
