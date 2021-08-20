import { Step } from "./Step";

export interface Elements {
    description: string;
    name: string;
    keyword: string;
    line: number;
    steps: Step[];
    type: string;
  }
