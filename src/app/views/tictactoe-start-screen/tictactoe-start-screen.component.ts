import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tictactoe-start-screen',
  templateUrl: './tictactoe-start-screen.component.html',
  styleUrls: ['./tictactoe-start-screen.component.css']
})
export class TictactoeStartScreenComponent implements OnInit {

  startBehavior: string;

  constructor(private router: Router) {
    this.startBehavior = 'animate__fadeIn';
  }

  ngOnInit(): void {
  }

  startClick() {
    this.startBehavior = 'animate__fadeIn_click';
    setTimeout(() => { this.router.navigate(['/startTictactoe']); }, 2000);
  }

  backStartScreen() {
    this.router.navigate(['/']);
  }

}
