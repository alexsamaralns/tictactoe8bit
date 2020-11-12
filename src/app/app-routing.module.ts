import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartScreenComponent } from './views/start-screen/start-screen.component';
import { StartGameComponent } from './views/start-game/start-game.component';

const routes: Routes = [
  {
    path: "",
    component: StartScreenComponent
  },
  {
    path: "startGame",
    component: StartGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
