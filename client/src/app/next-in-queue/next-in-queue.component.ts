import { Component, EventEmitter, Output } from '@angular/core';
import { MainService } from '../api/services';

@Component({
  selector: 'app-next-in-queue',
  templateUrl: './next-in-queue.component.html',
  styleUrls: ['./next-in-queue.component.scss']
})
export class NextInQueueComponent {
  
  constructor(private mainService: MainService){}
  @Output() onNextEvent = new EventEmitter();

  onNext(){
    this.mainService.apiMainNextInQueuePatch().subscribe(data => {
      if(!data.error)
      this.onNextEvent.emit();
    });
  }
}
