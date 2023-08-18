import { Component, OnInit } from '@angular/core';
import { CustomerToReturnDto } from '../api/models';
import { MainService } from '../api/services';

@Component({
  selector: 'app-main-queue',
  templateUrl: './main-queue.component.html',
  styleUrls: ['./main-queue.component.scss']
})
export class MainQueueComponent implements OnInit {
  
  customerInService?: CustomerToReturnDto;
  customersInQueue: CustomerToReturnDto[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.loadData();

    
  }

  loadData(){
    this.mainService.apiMainCustomersListGet().subscribe(data => {
      if(data.error) return;

      const inService = data.result!.find(c => c.queue!.inService);
      if(inService) {
        this.customerInService = inService;
      }

      this.customersInQueue = data.result!.filter(c => !c.queue!.inService).sort((a,b) => {
        return b.queue!.orderInQueue! - a.queue!.orderInQueue!;
      });
    });
  }

}
