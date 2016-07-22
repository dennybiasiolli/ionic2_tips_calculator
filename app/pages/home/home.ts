import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Expense} from '../../models';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    private expense = new Expense(0);
    constructor(private navCtrl: NavController) {

    }
    onBaseChange(newValue) {
        this.expense.setBase(parseFloat(newValue));
    }
    onSubtotalChange(newValue) {
        this.expense.setSubtotal(parseFloat(newValue));
    }
}
