import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-likes',
  templateUrl: './modal-likes.component.html',
  styleUrls: ['./modal-likes.component.css']
})
export class ModalLikesComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<ModalLikesComponent>
  ) { }

  ngOnInit() {}

  continue() : void {
    this.dialogRef.close();
  }

}
