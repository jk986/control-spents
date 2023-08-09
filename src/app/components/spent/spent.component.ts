import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Spent } from 'src/app/models/Spent';

declare var $:any;

@Component({
  selector: 'app-spent',
  templateUrl: './spent.component.html',
  styleUrls: ['./spent.component.css']
})
export class SpentComponent implements OnInit{
  //props
  @Input() spents:Array<Spent>;
  @Output() updateSpent = new EventEmitter(); // enviar spent a list-spents
  @Output() storeDeleteSpent = new EventEmitter(); // enviar spent a list-spents

  public icons = {
    saving:'../../../assets/img/icono_ahorro.svg',
    food:'../../../assets/img/icono_comida.svg',
    home:'../../../assets/img/icono_casa.svg',
    several:'../../../assets/img/icono_gastos.svg',
    leisure:'../../../assets/img/icono_ocio.svg',
    health:'../../../assets/img/icono_salud.svg',
    subscription:'../../../assets/img/icono_suscripciones.svg'
  }

  //costruct
  constructor(){
    this.spents = new Array();
  }

  //methds
  ngOnInit(): void {
    $('.spents-list').listSwipe({

      // The item in the list that has the side actions
      itemSelector: '>', 
    
      // The width of action button
      itemActionWidth: 80, 
    
      // Whether there is an action on the left
      leftAction: true, 
    
      // Whether there is an action on the right
      rightAction: true, 
    
      // Percent threshold for snapping to position on touch end
      snapThreshold: 0.8, 
    
      // Snap animation duration
      snapDuration: 200, 
    
      // Close other item actions if a new one is moved
      closeOnOpen: true, 
    
      // Number of pixels in the Y-axis before preventing swiping
      maxYDelta: 40, 
    
      // Number of pixels in the X-axis before allowing swiping
      initialXDelta: 25 
      
    });
  }

  /**
   * Funcion que me envia el gasto a editar 
   * al componente principal
   * @param spent gasto a editar
   */
  editSpent(spent:Spent){
    this.updateSpent.emit(spent);
  }

  deleteSpent(spent:Spent){
    this.storeDeleteSpent.emit(spent);
  }

}
