import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from '../components/admin/admin.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { NgClassComponent } from '../components/ng-class/ng-class.component';
import { ControlStatementComponent } from '../components/control-statement/control-statement.component';
import { AppRoutingModule, routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,               // Componente principal
    AdminComponent,             // Componente de Admin
    DataBindingComponent,       // Componente de Data Binding
    NgClassComponent,           // Componente de NgClass
    ControlStatementComponent,  // Componente de Control Flow
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule // Importando as rotas configuradas
  ],
  providers: [],
  bootstrap: [AppComponent],      // Componente inicial
})
export class AppModule {}
