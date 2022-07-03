import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { CompletedComponent } from './todo-page/completed/completed.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    CompletedComponent,
    Page404Component
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
