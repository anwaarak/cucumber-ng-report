import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _getReportUrl = "assets/data/cucumber/sample.json";

  constructor(private http: HttpClient,
    private _router: Router) { }

  //get report
  getReport(){
      return this.http.get(this._getReportUrl);
     }
}
