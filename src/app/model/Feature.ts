import { Tag } from "./Tag";

export interface  Feature {
    id : string;
    name : string;
    description : string;
    line : number;
    keyword : string;
    uri : string;
    tags : Array<Tag>;
    elements : Array<Element>;
}
