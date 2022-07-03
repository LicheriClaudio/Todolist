import { Injectable } from '@angular/core';
import { Lista } from '../interfaces/lista';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor() {}
  list: Lista[] = [];

  arr1(): Lista[] {
    return this.list;
  }

  arrSwitch(ele: Lista[]) {
    this.list = ele;
  }

  remove(u: Lista): void {
    let index = this.list.indexOf(u);
    this.list.splice(index, 1);
    u.id--
  }

  /*  getDone(): Lista[] {} */
}
