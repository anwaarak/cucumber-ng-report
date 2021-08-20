import { Result } from "./Result";

export interface Step {
    result: Result;
    name: string;
    keyword: string;
    line: number;
    match: any;
    embeddings: any[];
  }
