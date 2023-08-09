import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spent } from 'src/app/models/Spent';

@Component({
  selector: 'app-list-spents',
  templateUrl: './list-spents.component.html',
  styleUrls: ['./list-spents.component.css']
})
export class ListSpentsComponent {
  // props
  public editSpent:Spent;
  @Input() spents:Array<any>;
  @Output() sendEditSpent = new EventEmitter(); // evio gasto hacia app.component
  @Output() sendDeleteSpent = new EventEmitter(); // envio hacia app.component
  
  // construc
  constructor(){
    this.spents = new Array();
    this.editSpent = new Spent('','',0,'','');
  }
  // methds

  /**
   * Funcion para recibir el gasto desde spent.component
   * @param ev event evmitter
   */
  getEditSpent(ev:any){
    this.editSpent = ev;
    this.sendEditSpent.emit(this.editSpent);
  }

  /**
   * Funcion para recibir el gasto y enviarlo
   * @param ev evento
   */
  getDeleteSpent(ev:any){
    //this.editSpent = ev;
    this.sendDeleteSpent.emit(ev);
  }

  // obtengo los gastos filtrados
  getFilter(ev:any){
    this.spents = ev;
  }
}
