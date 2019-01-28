import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { LendBookPage } from '../book-list/lend-book/lend-book';
import { Book } from '../../models/Book';
import { LibraryService } from '../../services/library.service';

@Component({
    selector:'page-book-list',
    templateUrl:'book-list.html'
})

export class BookListPage {

    booksList: Book[];

    constructor(private modalCtrl: ModalController, 
                private libraryService: LibraryService,
                private menuCtrl: MenuController) {}
    
    ionViewWillEnter() {
        this.booksList = this.libraryService.booksList.slice();
    }

    onLoadLivre(index: number) {
       let modal = this.modalCtrl.create(LendBookPage, {index: index});
       modal.present();
    }
    onToggleMenu() {
        this.menuCtrl.open();
    }
}
