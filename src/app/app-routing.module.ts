import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseGameComponent } from './views/choose-game/choose-game.component';
import { TictactoeStartScreenComponent } from './views/tictactoe-start-screen/tictactoe-start-screen.component';
import { TictactoeStartGameComponent } from './views/tictactoe-start-game/tictactoe-start-game.component';
import { JanKenPonStartScreenComponent } from './views/jankenpon-start-screen/jankenpon-start-screen.component';

const routes: Routes = [
  {
    path: "",
    component: ChooseGameComponent
  },
  {
    path: "tictactoe",
    component: TictactoeStartScreenComponent
  },
  {
    path: "startTictactoe",
    component: TictactoeStartGameComponent
  },
  {
    path: "jankenpon",
    component: JanKenPonStartScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
