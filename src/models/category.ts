export class Category {
    public _name: string;

    constructor(name: string) {
        this._name = name;
    }
}

export class Fiction extends Category {
    public _genre: string;

    constructor(name: string, genre: string) {
        super(name);
        this._genre = genre;
    }
}

export class Thriller extends Category {
    public _crimeType: string;

    constructor(name: string, crimeType: string) {
        super(name);
        this._crimeType = crimeType;
    }
}

export class Collection extends Category {
    public _booksType: string;

    constructor(name: string, booksType: string) {
        super(name);
        this._booksType = booksType;
    }
}