import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Adrián', 'Dariana', 'David', 'Alberto', 'Rodrigo', 'Alex', 'Azael', 'Ricardo', 'Rubén', 'Rafa', 'Jorge', 'Jesús', 'Santi']
  constructor() { }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
