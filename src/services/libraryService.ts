import { Book } from "../models/book";
import { EntityService } from "./entityService";

export class LibraryService extends EntityService<Book> {
    private _searchResult: Book[] = [];

    search(searchWord: string): Book[] | false {

        this._list.forEach((valueBook, bookKey) => {
            valueBook._data.forEach((data, dataKey) => {
                if(data === searchWord)
                    this._searchResult.push(valueBook);
            })
        })

        if(this._searchResult.length < 1)
            return false;
        return this._searchResult;
    }

    borrow(borrowList: Map<number, Book>, id: string): void {
        borrowList.forEach((value, key) => {
            if(value._data.has('borrowed'))
                borrowList.delete(key);
            value._data.set('borrowed', id);
        })
    }

    return(returnList: Map<number, Book>): void {
        returnList.forEach((value) => {
            value._data.delete('borrowed');
        })
    }
}