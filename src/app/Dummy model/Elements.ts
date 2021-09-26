import { Before } from './Before';
import { After } from './After';
import { Step } from "./Step";

export interface Elements {
    id: string;
    before: Before[];
    description: string;
    name: string;
    keyword: string;
    line: number;
    steps: Step[];
    type: string;
    after: After[];
  }
