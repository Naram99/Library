import { EntityList } from "../models/entityList";

export class EntityService<T> implements EntityList<T> {
    _list: Map<number, T>;

    constructor(list: Map<number, T>) {
        this._list = list;
    }

    addEntity(id: number, data: T): void {
        this._list.set(id, data);
    }

    listEntities(): void {
        this._list.forEach(element => {
            console.log(`${element}`);
        })
    }

    deleteEntity(id: number): void {
        this._list.delete(id);
    }
}