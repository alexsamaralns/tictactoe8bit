import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  startBehavior: string;

  constructor(private router: Router) {
    this.startBehavior = 'animate__fadeIn';
  }

  ngOnInit(): void {
  }

  startClick() {
    this.startBehavior = 'animate__fadeIn_click';
    setTimeout(() => { this.router.navigate(['/startGame']); }, 2000);
  }

}
