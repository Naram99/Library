import { Entity } from "./entity";

export class Borrower implements Entity {
    _id: string;
    _data: Map<string, string>;

    constructor(id: string, data: Map<string, string>){
        this._id = id;
        this._data = data;
    }

    listData(): void {
        console.log(this._data);
    }
}