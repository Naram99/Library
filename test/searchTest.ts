import { LibraryService } from "../src/services/libraryService";

// keresési tesztek

let testLib = new LibraryService();

describe("test search function", () => {
    it("should return false for testLib.search(2025)", () => {
        expect(testLib.search("2025")).toBe(false);
    });
});