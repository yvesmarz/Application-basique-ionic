import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { LendCdPage } from './lend-cd/lend-cd';
import { Cd } from '../../models/Cd';
import { LibraryService } from '../../services/library.service';

@Component({
    selector:'page-cd-list',
    templateUrl:'cd-list.html'
})

export class CdListPage {

    cdList: Cd[];

    constructor( private modalCtrl: ModalController, 
                 private libraryService : LibraryService,
                 private menuCtrl: MenuController) {}
    
    ionViewWillEnter() {
        this.cdList = this.libraryService.cdList.slice();
    }

    onLoadCd(index : number){
       let modal = this.modalCtrl.create(LendCdPage, { index : index});
        modal.present();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}