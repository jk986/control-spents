import { Component, EventEmitter,Output, Input, OnInit } from '@angular/core';
import { Spent } from 'src/app/models/Spent';

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.css']
})
export class NewBudgetComponent implements OnInit{
  // props
  public budget:number;
  @Output() budgetIsValid = new EventEmitter();
  @Input() spents:Array<Spent>; // recibo datos de app.component
  public budgetValid:boolean;
  public message:string;
  public tipeMesage:string;
  @Output() setResetApp =  new EventEmitter();
  
  // cnstruc
  constructor(){
    this.budget = 0;
    this.budgetValid = false;
    this.tipeMesage = '';
    this.message = '';
    this.spents = new Array();
  }
  
  // methds
  ngOnInit(): void {
      this.budget = Number(localStorage.getItem('budget')) ?? 0;// toma el valor de localStorage
      //si existe el valor, emite el booleano para mostrar el componente que debe ser
      if(this.budget !=0 ){
        this.budgetValid = true;
        this.budgetIsValid.emit(this.budgetValid);
      }
  }

  // envio del formulario 
  handleBudget(ev:any){
    ev.preventDefault();
    this.validateBudget(this.budget);
  }
  
  /**
   * Función para validar el presupuesto
   * enviado por el formulario.
   * @param budget prsupuesto
  */
 validateBudget(budget:number){
   if(budget <= 0 || budget == 0){
     this.configMessage('error','Presupuesto no válido');
     return;
    }
    // presupuesto válido
    this.budgetValid = true;
    this.configMessage('','');
    
    if(this.budgetValid){
      // almacenar el presupuesto en localStorage por primera vez
      localStorage.setItem('budget',String(this.budget));
      // envio el presupuesto al enviar el formulario
      this.budgetIsValid.emit([this.budgetValid,this.budget]);
    }
    
  }

  /**
   * Funcion para configurar el componente mensaje
   * @param tipo tipo de mensaje
   * @param message mensaje que se mostrara
   */
  configMessage(tipo:string,message:string){
    this.tipeMesage =  tipo;
    this.message = message;
  }

  /**
   * Funcion que recoge y envia la señal del 
   * componente control-spents hacia app.component
   * @param ev evento recibido de contrl-budget
   */
  resetApp(ev:any){
    let reset = ev; //recojo respuesta de control-spents
    this.setResetApp.emit(reset); // envio respuesta hacia app.coponent
    this.budget = 0;
    localStorage.clear();
    this.budgetValid = reset;
    this.budgetIsValid.emit(this.budgetValid);
  }


}
