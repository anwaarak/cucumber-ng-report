import { Result } from './../../../Dummy model/Result';
import { Step } from './../../../Dummy model/Step';
import { Elements } from './../../../Dummy model/Elements';
import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Description } from '../../../Dummy model/Description';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

  interface TreeNode {
    name: string;
    children?: TreeNode[];
  }



let TREE_DATA: TreeNode[] = [];

//Receive raw json and construct tree
function constructTree(json: JSON) {

  //let parsedJson: Description[] = JSON.parse(JSON.stringify(abc()));
    const data: string = localStorage.getItem("myData");
    let parsedJson: Description[] = JSON.parse(data);
   // console.log((parsedJson[0].elements[0].description))
    for(let i = 0; i < parsedJson.length; ++i) {
      TREE_DATA.push(parseDescription(parsedJson[i]));
    }
  }

function parseDescription(d: Description) {
  let parent: TreeNode = {name: null, children: []};
  parent.name = d.description;
  for(let i= 0; i < d.elements.length; ++i) {
    let element: TreeNode = parseElement(d.elements[i]);
    parent.children.push(element);
  }
  return parent;
}

function parseElement(e: Elements) {
  let parent: TreeNode = {name: null, children: []};
  if(e.description)
    parent.name = e.description;
  else
    parent.name = "Element Description"
  for(let i= 0; i < e.steps.length; ++i) {
    let step: TreeNode = parseStep(e.steps[i]);
    parent.children.push(step);
  }
  return parent;
}

function parseStep(s: Step) {
  let parent: TreeNode = {name: null, children: []};
  parent.name = "Steps";
  if(s.result) {
    let result: TreeNode = parseResult(s.result);
    parent.children.push(result);
  } else {
    parent.children.push({name: "No matching results"})
  }
  return parent;
}

function parseResult(r: Result) {
  let parent: TreeNode = {name: null, children: []};
  let child1: TreeNode = {name: null};
  let child2: TreeNode = {name: null};

  if(r.duration)
    child1.name = "" + r.duration;
  else
    child1.name = "No duration"
  if(r.status)
    child2.name = r.status;
  else
    child2.name = "undefined"

  parent.name = "Result";
  parent.children.push(child1);
  parent.children.push(child2);
  return parent;
}

@Component({
  selector: 'app-report-tree-view',
  templateUrl: './report-tree-view.component.html',
  styleUrls: ['./report-tree-view.component.css']
})

export class ReportTreeViewComponent implements OnInit {

   description: any = [];

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor( private _dataService: DataService,
    private _router: Router,
    private http: HttpClient ) {
    constructTree(null)
    //parse(abc());
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
    this.getDescription();
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  getDescription(){
     this._dataService.getDescription()
        .subscribe(data => {
          console.log(data);
          this.description = data;
        },
         error => console.log(error));
  }
  }



/*
import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'app-report-tree-view',
  templateUrl: './report-tree-view.component.html',
  styleUrls: ['./report-tree-view.component.css']
})


export class ReportTreeViewComponent implements OnInit {


  report: any = {};
  steps: any = {};


  constructor() {
  }

  ngOnInit(): void {
    this.report = resData;
    this.steps = resData.elements[0].steps[0];
  }
  }


  const resData =  {

        "description": "This is description of the feature",
        "elements": [
            {
                "description": "Perfect background",
                "steps": [
                    {
                        "result": {
                            "duration": 99107447000,
                            "status": "passed"
                        }
						}]
						}]

  }*/
