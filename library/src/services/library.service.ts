import { Book } from "../models/Book";


export class LibraryService{

    booksList: Book[] =  [
        {
            name: 'Pro Angular 6',
            author: 'Adam Freeman',
            isLend: false
        },
        {
            name: 'Begining Ionic',
            author: 'Greg Lim',
            isLend: true
        },
        {
            name: 'Java pour les nuls',
            author: 'Barry Burd',
            isLend: false
        }

    ];

    cdList = [
        {
            name: 'Windows',
            author: 'Microsoft',
            isLend: false
        },
        {
            name: 'Unbutu',
            author: 'Libre',
            isLend: false
        },
        {
            name: 'Waka waka',
            author: 'Shakira',
            isLend: true
        }

    ];


}