import { Elements } from "./Elements";

export interface Description {
    id: string;
    tags: any[];
    description: string;
    name: string;
    keyword: string;
    line: number;
    elements: Elements[];
    uri: string;
  }
