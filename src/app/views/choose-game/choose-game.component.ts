import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.css']
})
export class ChooseGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tictactoe() {
    this.router.navigate(['/tictactoe']);
  }

  jankenpon() {
    this.router.navigate(['/jankenpon']);
  }

}
