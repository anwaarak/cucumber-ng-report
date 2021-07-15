import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AfterViewInit, ElementRef} from '@angular/core';
import { CucumberReport } from 'src/app/model/CucumberReport';



@Component({
  selector: 'app-cucumber-json-parser',
  templateUrl: './cucumber-json-parser.component.html',
  styleUrls: ['./cucumber-json-parser.component.css']
})
export class CucumberJsonParserComponent implements OnInit {
  jsonPath: string = 'assets/data/cucumber/sample.json';
  features: any = [];
  constructor(private httpClient: HttpClient){}
  ngOnInit(){

  }
}
