import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Spent } from 'src/app/models/Spent';

@Component({
  selector: 'app-filter-spents',
  templateUrl: './filter-spents.component.html',
  styleUrls: ['./filter-spents.component.css']
})
export class FilterSpentsComponent {
  //props
  public category:string;

  @Input() spents:Array<Spent>;
  @Output() sendSpentsFilter =  new EventEmitter();
  //construc
  constructor(){
    this.category = '';
    this.spents = new Array();
  }
  //meths
  /**
   * Funcion que me recoge la opcion 
   * seleccionada para aplicar el 
   * filtro
   */
  getFilter(){
    // solo si se ha seleccionado la caegoria haz:
    if(this.category !=''){
      // almacena los gastos con la mismma categoria
      let filtro = this.spents.filter(spent => spent.category == this.category);
      // almaceno en el array los gastos filtrados
      this.spents = filtro;
      //console.log(this.spents);
      // envio la seleccion a list spents
      this.sendSpentsFilter.emit(this.spents);
    }
  }
}
