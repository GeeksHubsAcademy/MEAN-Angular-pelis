import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent  {
  @Input()
  name:string;
  @Output()
  voted=new EventEmitter<boolean>();

  didVote = false;
  constructor() { }
  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
