import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Lista } from '../interfaces/lista';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  list:Lista[] = []


dino: string = ''
counter:number = 0
  constructor( private transferService:TransferService) {}
   ngOnInit(): void {
    this.list = this.transferService.arr1();

   }




   listaScritta():void{
    this.counter++
    let ele = { id: this.counter, title: this.dino, completed: false };
    this.list.push(ele)
    this.transferService.arrSwitch(this.list)
    console.log(this.list)
    console.log(ele);

   };

removi(c:Lista){

  this.transferService.remove(c)
}

    /* this.transferService */
    /* this.transferService.arr2() = this.listComp */




 };
