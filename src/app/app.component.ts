import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalLikesComponent } from './modal-likes/modal-likes.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor() { }

}
