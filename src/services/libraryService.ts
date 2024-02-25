import { Book } from "../models/book";
import { EntityService } from "./entityService";

export class LibraryService extends EntityService<Book> {
    search(searchWord: string): Book[] {
        
    }
}