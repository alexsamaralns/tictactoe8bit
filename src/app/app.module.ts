import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TictactoeStartScreenComponent } from './views/tictactoe-start-screen/tictactoe-start-screen.component';
import { TictactoeStartGameComponent } from './views/tictactoe-start-game/tictactoe-start-game.component';
import { ChooseGameComponent } from './views/choose-game/choose-game.component';
import { JanKenPonStartScreenComponent } from './views/jankenpon-start-screen/jankenpon-start-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TictactoeStartScreenComponent,
    TictactoeStartGameComponent,
    ChooseGameComponent,
    JanKenPonStartScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
