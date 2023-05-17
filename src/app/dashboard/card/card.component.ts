import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import 'animate.css';
import { ModalLikesComponent } from 'src/app/modal-likes/modal-likes.component';
import { ModalPerfilComponent } from 'src/app/modal-perfil/modal-perfil.component';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() cardClicked = new EventEmitter<Skills>();
  @Input() card: Skills;
  buttonColor: string;
  emojisTop: number[] = [];
  emojisBottom: number[] = [];
  constructor(
    private dialog: MatDialog,
    private skillsService: SkillsService
    ) { }

  ngOnInit() {}

   onLike(){
    this.card.likes++; // Incrementa o número de likes
    //Altera a cor quando é maior ou igual a 5
    if(this.card.likes >= 5){
      this.buttonColor = '#0000ff';
    }
    //Quando for igual a 5 curtidas irá abrir o modal avisando sobre as curtidas
    if(this.card.likes === 5){
      this.openModalLike();
    }
    /* altera a cor quando for maior que 10 curtidas e logo em seguida 
      irá aparecer vários emojis e falando que deu match.
    */
    if(this.card.likes > 10) {
      this.buttonColor = '#008000';
      this.generateEmojis();
    }
    // Chame o serviço REST para salvar os likes
    this.updateLike();
  }

  updateLike(){
    this.skillsService.updateLikes(this.card).subscribe({
      next: (res) => {
        console.log('Like editado com sucesso!', res);
      },
      error: (err) => {
        console.error('Erro ao editar like: ', err);
      },
      complete: () => {
        console.log('Edição de like concluída!');
        console.log('listagem do card', this.card);
        
      }
    });
  }

  //Modais
  openModalLike() {

    const dialogRef = this.dialog.open(ModalLikesComponent,{
      width: '400px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }

  openModalPerfil() {

    const dialogRef = this.dialog.open(ModalPerfilComponent,{
      width: '400px',
      height: '500px',
      disableClose: true,
      data: this.card
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }
  //Fiz esse método para multiplicar os emojis
  generateEmojis() {
    this.emojisTop = Array.from({ length: 50 }).map((_, i) => i);
    this.emojisBottom = Array.from({ length: 50 }).map((_, i) => i);
    
    setTimeout(() => {
      this.clearEmojis();
    }, 5000);
  }

  //desaparece os emojis depois de 5 segundos
  clearEmojis(){
    this.emojisTop = [];
    this.emojisBottom = [];
  }
  onShare() {
    //abri o link do meu linkedin
    const url = 'https://www.linkedin.com/in/victorhugofnr/';
    window.open(url, '_blank');
  }

}
