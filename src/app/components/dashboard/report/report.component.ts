import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../services/data.service';
import { Report } from '../../../model/report';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  constructor(private _dataService: DataService,
    private _router: Router,
    private http: HttpClient) { }
    rowData : any;
    columnDefs = [
      { headerName: 'Id #', field: 'id', sortable: true, filter: true, resizable: true,  width : 200,checkboxSelection: true,cellStyle: { backgroundColor: '#e6f2ca' }},
      { headerName: 'Description', field: 'description', sortable: true, filter: true, resizable: true,  width : 200,cellStyle: { backgroundColor: '#f9f3f3' }},
      { headerName: 'Name', field: 'name', sortable: true, filter: true, resizable: true, width : 200,cellStyle: { backgroundColor: '#e6f2ca' }},
      { headerName: 'Keyword', field: 'keyword', sortable: true, filter: true, resizable: true, width : 250,cellStyle: { backgroundColor: '#f9f3f3' }},
      { headerName: 'Line', field: 'line', sortable: true, filter: true, resizable: true, width : 200,cellStyle: { backgroundColor: '#e6f2ca' }},
      { headerName: 'Elements', field: 'elements', sortable: true, filter: true, resizable: true, width : 250,cellStyle: { backgroundColor: '#f9f3f3' }},
    ];

  ngOnInit(): void {
     this.rowData = this._dataService.getReport()
  }
}
