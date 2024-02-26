import { Book } from "../models/book";
import { EntityService } from "./entityService";

// Ez az osztály a könyvek keresésével, kölcsönzésével és visszahozatalával
// foglalkozik.
export class LibraryService extends EntityService<Book> {
    private _searchResult: Book[] = [];

    /**
     * Kilistázza a könyvtárban található könyveket.
     */
    listBooks() {
        this._list.forEach(book => {
            console.log(book._data.get('title'));
        })
    }

    /**
     * 
     * @param searchWord ami alapján keresünk
     * @returns a találatokkal rendelkező tömböt adja vissza, vagy 'false' 
     * értéket, ha nincsen találat
     */
    search(searchWord: string): Book[] | false {
        this._searchResult = [];

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

    /**
     * 
     * @param borrowList a kölcsönözni kívánt könyveket tartalmazó Map
     * @param id a felhasználó id-ja
     * 
     */

    // *** @borrowDecorator *** //
    borrow(borrowList: Map<number, Book>, id: string): void {

        borrowList.forEach((value, key) => {

            // Ha a könyvet már valaki kikölcsönözte, kitörli a listából.
            if(value._data.has('borrowed'))
                borrowList.delete(key);
            // Hozzáadja a könyv adataihoz, hogy kikölcsönözték, és az illető 
            // id-ját
            else
                value._data.set('borrowed', id);
        })
    }

    /**
     * 
     * @param returnList a visszahozott könyveket tartalmazó Map
     * 
     * Kitörli a könyvek adataiból a kikölcsönzést.
     */
    return(returnList: Map<number, Book>): void {

        returnList.forEach((value) => {
            value._data.delete('borrowed');
        })
    }
}