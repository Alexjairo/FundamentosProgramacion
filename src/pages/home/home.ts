import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero1: number;
  numero2: number;
  resultado: number;

  constructor(public navCtrl: NavController) {

  }

  calcular() {
    this.resultado = this.numero1*1 + this.numero2*1;
  }
}
