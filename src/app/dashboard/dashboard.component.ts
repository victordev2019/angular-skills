import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Skills } from '../model/skills.model';
import { SkillsService } from '../service/skills.service';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<Skills>;

  constructor(
    private skillsService: SkillsService,
    public dialog: MatDialog,
    private loadingService: LoadingService
    ) { }

  ngOnInit() {
    this.getSkills();
    //this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => this.cards = ret);
  }

  private getSkills() {
    //mostra o carregamento antes de carregar os dados
    this.loadingService.isLoading = true;
    this.skillsService.getSkills().subscribe((skills) => {
      this.cards = skills;
      //finaliza quando termina de carrega os dados
      this.loadingService.isLoading = false;
      
    });
  }

}
