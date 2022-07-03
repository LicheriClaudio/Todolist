import { Component, Input, OnInit } from '@angular/core';
import { Lista } from 'src/app/interfaces/lista';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  open: boolean = false;
  listComp: Lista[] = [];
  constructor(private transferService: TransferService) {}

  ngOnInit(): void {

    this.listComp = this.transferService
      .arr1()
      .filter((ele) => ele.completed == true);
    setTimeout((): boolean => {

      return (this.open = true);

    }, 2000);

    /* this.listComp = this.transferService.arr1(); */
  }
  removi(c: Lista) {
    let index = this.listComp.indexOf(c);
    this.listComp.splice(index, 1);

    this.transferService.remove(c);
  }

}


