import { Borrower } from "../models/borrower";
import { LibraryService } from "./libraryService";

export class BorrowerService extends Borrower {
    private _library: LibraryService;

    constructor(
        id: string, 
        data: Map<string, string>, 
        library: LibraryService) {
        super(id, data);
        this._library = library;
    }

    
}