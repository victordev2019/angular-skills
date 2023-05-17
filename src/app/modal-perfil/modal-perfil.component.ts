import { Component, OnInit, Input, Inject } from '@angular/core';
import { Skills } from '../model/skills.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModalLikesComponent } from '../modal-likes/modal-likes.component';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.css']
})
export class ModalPerfilComponent implements OnInit {
  
  constructor(
  @Inject(MAT_DIALOG_DATA) public card: Skills,
  public dialogRef: MatDialogRef<ModalLikesComponent>) { }

  ngOnInit() {
  }

  fechar() : void {
    this.dialogRef.close();
  }
}
