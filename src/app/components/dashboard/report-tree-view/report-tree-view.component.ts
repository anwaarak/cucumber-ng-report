import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface Description {
    description: string;
    elements: Elements[];
  }

  interface Elements {
    description: string;
    steps: Step[];
  }

  interface Step {
    duration: number;
    status: string;
  }

  interface TreeNode {
    name: string;
    children?: TreeNode[];
  }

function abc(){
  return <JSON><unknown> {
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
                    }
                  ]
            }
          ]
  }
}

//Receive raw json and construct tree
  function constructTree(json: JSON) {
    let parsedJson: Description = JSON.parse(JSON.stringify(abc()));
   // console.log((parsedJson[0].elements[0].description))
    //for(let i = 0; i < parsedJson.length; ++i) {
      TREE_DATA.push(parseDescription(parsedJson));
   // }
  }

  //Parse innermost child(Steps)
  function parseSteps(s : Step[]) {
    console.log("parsed steps")
    let parent: TreeNode;
    parent.name = "Steps"
    for(let i = 0; i < s.length; ++i) {
      let tmp1: TreeNode;
      let tmp2: TreeNode;
      tmp1.name = <string><unknown>s[0].duration;
      tmp2.name = s[0].status;
      this.parent.children.push(tmp1);
      this.parent.children.push(tmp2);
    }
    return parent;
  }

  //Parse inner child (Elements)
  function parseElements(e : Elements[]) {
      let parent: TreeNode;
      parent.name = "Elements"
      for(let i = 0; i < e.length; ++i) {
        let tmp: TreeNode;
        tmp.children.push(parseSteps(e[i].steps));
        this.parent.children.push(tmp);
    }
    return parent;
  }

  //Parse parent (description)
  function parseDescription(d: Description) {
    let parent: TreeNode;
    //console.log(d.description.elements[0].description)
    this.parent.name = d.description;
    this.parent.children = parseElements(<Elements[]>d.elements);
    return parent;
  }

let TREE_DATA: TreeNode[];

@Component({
  selector: 'app-report-tree-view',
  templateUrl: './report-tree-view.component.html',
  styleUrls: ['./report-tree-view.component.css']
})

export class ReportTreeViewComponent implements OnInit {

treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {
    constructTree(null)
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
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
