import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';
import { Book } from '../../../models/Book';
import { LibraryService } from '../../../services/library.service';

@Component({
    selector:'page-lend-book',
    templateUrl:'lend-book.html'
})

export class LendBookPage implements OnInit {

    index: number;
    book: Book;

    constructor(public navParams: NavParams, public viewCtrl: ViewController,
               private libraryService: LibraryService) {}

    ngOnInit() {
        this.index = this.navParams.get('index');
        this.book = this.libraryService.booksList[this.index];
    } 
 
    dismisModal() {
      this.viewCtrl.dismiss();
    }

    onLendBook() {
        this.book.isLend =! this.book.isLend;
    }
}