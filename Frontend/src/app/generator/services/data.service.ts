import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Generatore} from 'app/generator/generatore';


@Injectable()
export class DataService {

    

  constructor(private http: HttpClient) {}

 
  findData(): Promise<Generatore[]>{
    const headers = { 'Authorization': 'Bearer '+ sessionStorage.getItem('token')};
    return  this.http.post<Generatore[]>('http://localhost:4000/getType',{classe: 'generatore'} ,{ headers }).toPromise();
  }
 
}
