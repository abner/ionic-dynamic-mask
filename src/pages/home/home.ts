import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public phone = '';

  public canLeave: boolean = false;


  constructor(public navCtrl: NavController) {

  }

  onChange(event) {
    this.canLeave = this.inputCheck();
  }

  public mask = function (rawValue) {
    if (rawValue.length > 18) {
      return ['+', '5', '5', ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      return ['+', '5', '5', ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }


  private inputCheck(): boolean {
    if(!this.phone) {
      return true;
    }
    else return false;
  }

  isValid() {
    return this.phone.length > 17;
  }

  navigate() {
    this.navCtrl.push(ListPage);
  }
}
