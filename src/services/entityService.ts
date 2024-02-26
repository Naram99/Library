export class EntityService<T> {
    _list: Map<number, T> = new Map();

    addEntity(id: number, data: T): void {
        this._list.set(id, data);
    }

    deleteEntity(id: number): void {
        this._list.delete(id);
    }
}