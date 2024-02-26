import { LibraryService } from "./services/libraryService";
import { BorrowerService } from "./services/borrowerService";
import { Book } from "./models/book";
import { Collection, Fiction, Thriller } from "./models/category";

console.log("Hello World!");

let dune = new Book(
    '1', 
    'Dune', 
    'Frank Herbert', 
    '1965', 
    new Fiction('fiction', 'Sci-Fi'));

let bertram = new Book(
    '2', 
    'At Bertram\'s Hotel', 
    'Agatha Christie', 
    '1965', 
    new Thriller('thriller', 'murder'));

let bible = new Book(
    '3', 
    'Holy Bible', 
    'many', 
    '1445',
    new Collection('collection', 'spiritual'));

let library = new LibraryService();
library._list.set(1, bertram);
library._list.set(2, dune);
library._list.set(3, bible);

let jack = new BorrowerService('jack1',  library);
jack._data.set('id', 'Jack01');
jack._data.set('userName', 'Jack1984');

console.log(library.listBooks());
console.log(library.search('1965'));

let borrows = new Map<number, Book>();
borrows.set(1, bible);
borrows.set(2, dune);

jack.borrow(borrows);

console.log(library.search('1965'));
