import { Collection, Fiction, Thriller } from "./category";
import { Entity } from "./entity";

export class Book implements Entity {
    _id: string;
    _data: Map<string, string> = new Map();

    constructor(id: string, 
                title: string, 
                author: string, 
                release: string,
                public category: Fiction | Thriller | Collection){
        this._id = id;
        this._data.set('id', id)
        this._data.set('title', title);
        this._data.set('author', author);
        this._data.set('release', release);
        this._data.set('category', category._name);
    }
}