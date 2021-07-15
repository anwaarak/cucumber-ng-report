export class Report {
    id : string;
    description : string;
    name : string;
    keyword : string;
    line : string;
    elements : string;

    constructor(data: Report){
        this.id = data.id;
        this.description = data.description;
        this.name = data.name;
        this.keyword = data.keyword;
        this.line = data.line;
        this.elements = data.elements;
    }
}

