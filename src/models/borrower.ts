import { Entity } from "./entity";

export class Borrower implements Entity {
    _id: string;
    _data: Map<string, string> = new Map();

    constructor(id: string){
        this._id = id;
        this._data.set('id', id);
    }

    listData(): void {
        console.log(this._data);
    }
}