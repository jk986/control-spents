import { Component, Output, EventEmitter, OnInit, Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Spent } from 'src/app/models/Spent';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, DoCheck, OnChanges{
  // props
  @Output() closeModal =  new EventEmitter();
  @Output() sendSpent = new EventEmitter();
  @Input() editEspent:Spent; // recibe el gasto si se desea editar
  @Input() edit:boolean;
  public spent:Spent;
  public animarForm:boolean;
  public message:string;
  public date = new Date();
  public title:string;

  // constr
  constructor(){
    this.spent = new Spent('','',0,'','');
    this.editEspent = new Spent('','',0,'','');
    this.animarForm = false;
    this.message = '';
    this.edit = false;
    this.title = 'Nuevo gasto';
  }

  // methd
  ngOnInit(): void {
    this.checkEditSpent();
    // añadir la clase animar al formulario
    setTimeout(()=>{
      this.animarForm=true;
    },300);
  }

  ngDoCheck(): void {
    this.checkEditSpent();
    //console.log(this.edit);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  /**
   * Funcion para cerrar la ventana modal
   */
  hideModal = () =>{
    this.animarForm=false;
    setTimeout(()=>{
      this.closeModal.emit(false);
    },300);
  }

  /**
   * Funcion para enviar los datos del formulario
   */
  handleSubmit(ev:any){
    ev.preventDefault();
    // verifico que el objeto no este vacío
    if([this.spent.nameBudg,this.spent.amount,this.spent.category].includes('')){
      this.message = 'Todos los campos son obligatorios';
      return;
    }
    // si hay infomacion en las variables
    if(this.spent.id == ''){
      // nuevo gsto
      this.message = '';
      this.spent.id = this.generarId();
      this.spent.date = this.formatDate(this.date);
      // envio el gasto al app.componen
      this.sendSpent.emit(this.spent);
    }
    this.hideModal();
  }

  /**
   * funcion para generar un ID y añadirlo al gasto
   */
  generarId(){
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  formatDate(date:any){
    const options = {
      year:'numeric',
      month: 'long',
      day: '2-digit'
    }
    return date.toLocaleDateString('es-Es', options);
  }

  checkEditSpent(){
    if(this.edit){
      this.spent = this.editEspent;
    }
  }


}
