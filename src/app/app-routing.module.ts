import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompletedComponent } from './todo-page/completed/completed.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
  {
    path: 'todo-page',
    component: TodoPageComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo-page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
