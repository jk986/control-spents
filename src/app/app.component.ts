import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Spent } from './models/Spent';

// npm i react-swipeable-list
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  // props
  public title = 'Planificador de Gastos';
  public spents:Array<Spent>;
  public spent:Spent;
  public spentEdit:Spent;
  public edit:boolean;
  
  // new budget component
  public budgetValid:boolean | any;

  // modal component
  public showModal:boolean;
  
  //
  @Input() sendSpents:any;

  // construct
  constructor(){
    this.showModal = false; // inicia en false
    this.budgetValid = false;
    this.spents = new Array();
    this.spent = new Spent('','',0,'',0);
    this.sendSpents = null;
    this.spentEdit = new Spent('','',0,'','');
    this.edit = false;
  }
  ngAfterViewInit(): void {
    
  }
  
  ngOnInit(): void {
    // convertir el texto a JSON
    let gastosAlmacenados = JSON.parse(String(localStorage.getItem('spent'))) ?? [] ;
    // inicio spents con valores del localStorage
    this.spents = gastosAlmacenados;
    //console.log(this.spents);
  }
  // methd
  /**
   * Funcion para ver si el presupuesto es valido
   */
  getBudgetIsValid(ev:any){
    this.budgetValid = ev;
  }

  /**
   * Funcion para mostrar la ventana modal
   */
  handleNewSpent(){
    this.showModal = true;
  }

  /**
   * Funcion para recibir la indicacion de 
   * cuando cerrar el modal
   * @param ev evento
   */
  getShowModal(ev:any){
    this.showModal = ev;
    this.edit = ev;
  }

  getSpent(ev:any){
    this.spent = ev;
    //console.log(this.spent);
    this.storeExpenses(this.spent);
  }

  storeExpenses(spent:Spent){
    // guardo registro nuevo
    this.spents.push(spent);
    //this.sendSpents = this.spents;
    
    //  Actualizar
    let spentsUpdated:Array<Spent> = new Array();
    // si spent es igual a alguno de los iterados, se queda con ese pues esta actualizado
    spentsUpdated = this.spents.map(reviewSpent => reviewSpent.id === spent.id ? spent : reviewSpent);
    // actualizo el array de gastos
    this.spents = spentsUpdated;
    // almaceno los valores 
    localStorage.setItem('spent', JSON.stringify(this.spents) ?? []);
  }
  /**
   * Funcion para recibir el gasto a editar desde list-spents 
   * @param ev event emmiter
   */
  getEditSpent(ev:any){
    this.spentEdit=ev;
    console.log('Gasto a editar');
    console.log(this.spentEdit);
    this.showModal = true;
    this.edit = true;
  }

  getDeleteSpent(ev:any){
    this.spentEdit = ev; // objeto a eliminar
    // almacena los objetos diferentes al del parametro
    let spentsUpdated = this.spents.filter(spent => spent.id !== this.spentEdit.id)
    //console.log(spentsUpdated);
    this.spents = spentsUpdated;
    localStorage.setItem('spent', JSON.stringify(this.spents));
  }

  getResetApp(ev:any){
    this.budgetValid = ev;
    //console.log({'message':this.budgetValid});
  }




}
