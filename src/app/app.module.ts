import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBudgetComponent } from './components/new-budget/new-budget.component';
import { MessageComponent } from './components/message/message.component';
import { ControlBudgetComponent } from './components/control-budget/control-budget.component';
import { ModalComponent } from './components/modal/modal.component';
import { ListSpentsComponent } from './components/list-spents/list-spents.component';
import { SpentComponent } from './components/spent/spent.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { FilterSpentsComponent } from './components/filter-spents/filter-spents.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBudgetComponent,
    MessageComponent,
    ControlBudgetComponent,
    ModalComponent,
    ListSpentsComponent,
    SpentComponent,
    GraphicComponent,
    FilterSpentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
