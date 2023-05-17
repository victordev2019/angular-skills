import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component";
import { CardComponent } from "./dashboard/card/card.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FakeApiService } from "./fake-api.service";
import { HelloComponent } from "./hello.component";
import { ModalLikesComponent } from './modal-likes/modal-likes.component';
import { ModalPerfilComponent } from './modal-perfil/modal-perfil.component';
import { NavComponent } from './nav/nav.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeApiService, { delay: 5000 }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    CardComponent,
    ModalLikesComponent,
    ModalPerfilComponent,
    NavComponent,
    RodapeComponent,
    LoadingComponent,
  ],
  entryComponents: [
    ModalLikesComponent,
    ModalPerfilComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
