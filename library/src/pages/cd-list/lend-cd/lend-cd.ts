import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from '../../../models/Cd';
import { LibraryService } from '../../../services/library.service';

@Component({
    selector:'page-lend-cd',
    templateUrl:'lend-cd.html'
})

export class LendCdPage {
    
    index: number;
     cd: Cd;
    constructor(public navParams: NavParams, public viewCtrl : ViewController,
                private libraryService: LibraryService) { }

    ngOnInit() {
        this.index = this.navParams.get('index');
        this.cd = this.libraryService.cdList[this.index]
      
    } 

    dismisModal() {
        this.viewCtrl.dismiss();
    }

    onLendCd() {
        this.cd.isLend = !this.cd.isLend;
    }
}