export class Book {
    
    author: string;
    isLend: boolean;

    constructor(public name: string) {
        this.isLend= false;
    }
}