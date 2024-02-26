import { Book } from "../models/book";
import { Borrower } from "../models/borrower";
import { LibraryService } from "./libraryService";

export class BorrowerService extends Borrower {
    private _library: LibraryService;

    constructor(
        id: string, 
        library: LibraryService) {
        super(id);
        this._library = library;
    }

    /**
     * Listázza a felhasználó által kölcsönzött könyveket
     */
    listBorrowed() {
        this._library.search(this._id);
    }

    borrow(borrowList: Map<number, Book>) {
        this._library.borrow(borrowList, this._id);
    }

    return(returnList: Map<number, Book>) {
        this._library.return(returnList);
    }
}