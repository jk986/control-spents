import { Component, Input, DoCheck, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Spent } from 'src/app/models/Spent';


@Component({
  selector: 'app-control-budget',
  templateUrl: './control-budget.component.html',
  styleUrls: ['./control-budget.component.css']
})
export class ControlBudgetComponent implements DoCheck, OnInit, OnChanges{
  // props
  @Input() budget:number ;
  @Input() spents:Array<Spent>;
  public disponible:number;
  public gastado:number;
  public porcentaje:number;
  @Output() resetApp = new EventEmitter(); // enviar state para resetar app

  // constr
  constructor(){
    this.budget = 0;
    this.spents =  new Array(); // recibo datos de new-budget.component
    this.disponible = 0;
    this.gastado = 0;
    this.porcentaje = 0;
  }
  // meths
  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.gastado = this.spents.reduce((total,instanciaObjeto)=> instanciaObjeto.amount+total,0);
    this.disponible = Number((this.budget-this.gastado).toFixed(2));
    this.porcentaje = Number((((this.budget-this.disponible)/this.budget)*100).toFixed(2));
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }
  /**
   * Metodo que da formato de moneda a una cantidad dada
   * @param cantidad dato formatear
   * @returns string con la cantidad formateada a moneda
  */
 formatearCantidad = (cantidad:number) => {
   return cantidad.toLocaleString('en-US',{
     style: 'currency',
     currency: 'USD'
    })
  };

  /**
   * Funcion para enviar señal y 
   * resetear la app
   */
  handleResetApp(){
    // confirmacion de reinicio
    let result = confirm('¿Deseas reiniciar la app?');
    if(result){
      // si desea reiniciar 
        //enviar false para que muestre el formulario de presupuesto
      var reset = false;
      // envio la respuesta a new-budget
      this.resetApp.emit(reset);
      //console.log(reset);
    }else{
      return;
      reset = true;
      console.log(reset);
    }
  }

  
  
}
