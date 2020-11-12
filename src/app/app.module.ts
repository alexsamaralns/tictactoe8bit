import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './views/start-screen/start-screen.component';
import { StartGameComponent } from './views/start-game/start-game.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    StartGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
