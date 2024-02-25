export interface EntityList<T> {
    _list: Map<number, T>

    addEntity(id: number, data: T): void;

    listEntities(): void;

    deleteEntity(id: number): void;
}