export class Category {
    public idcatagory: number;
    public name: string;
    public description: string;

    constructor(idcatagory: number, name: string, description: string) {
        this.idcatagory = idcatagory;
        this.name = name;
        this.description = description;
    }
}