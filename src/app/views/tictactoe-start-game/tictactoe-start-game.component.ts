import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let Swal: any;

@Component({
  selector: 'app-tictactoe-start-game',
  templateUrl: './tictactoe-start-game.component.html',
  styleUrls: ['./tictactoe-start-game.component.css']
})
export class TictactoeStartGameComponent implements OnInit {

  blockGame: number;
  blockClick: number;
  scoreP1: number;
  scoreP2: number;
  turnP1: string;
  turnP2: string;
  time: string;
  clickResetScore: string;
  board: Array<number>;
  marks: Array<string>;
  player: Array<string>;

  constructor(private router: Router) {
    this.blockGame = 0;
    this.blockClick = 0;
    this.scoreP1 = 0;
    this.scoreP2 = 0;
    this.turnP1 = 'turn-p1';
    this.turnP2 = '';
    this.time = 'p1';
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.marks = ['', '', '', '', '', '', '', '', ''];
    this.player = ['', '', '', '', '', '', '', '', ''];
    this.clickResetScore = '';
  }

  ngOnInit(): void {
    let i: number;
    for (i = 0; i < 9; i++) {
      var element = document.getElementById(i.toString());
      element.classList.add('cursor-pointer');
    }
  }

  clickSpace(place: number) {
    if (this.board[place] == 0 && this.blockGame == 0) {
      var element = document.getElementById(place.toString());
      element.classList.remove('cursor-pointer');
      if (this.time == 'p1') {
        this.board[place] = 1;
        this.marks[place] = 'X';
        this.player[place] = 'symbolP1';
        this.time = 'p2';
        this.turnP1 = '';
        this.turnP2 = 'turn-p2';
      } else {
        this.board[place] = 2;
        this.marks[place] = 'O';
        this.player[place] = 'symbolP2';
        this.time = 'p1';
        this.turnP1 = 'turn-p1';
        this.turnP2 = '';
      }
    }
    if(this.checkGame() == 1) {
      if(this.blockClick == 0) {
        this.blockClick = 1;
        setTimeout(() => { this.winner(1);  }, 1000);
        setTimeout(() => { this.resetGame();  }, 3500);
      }
    }else if(this.checkGame() == 2) {
      if(this.blockClick == 0) {
        this.blockClick = 1;
        setTimeout(() => { this.winner(2);  }, 1000);
        setTimeout(() => { this.resetGame();  }, 3500);
      }
    }else if(this.checkGame() == 4) {
      if(this.blockClick == 0) {
        this.blockClick = 1;
        setTimeout(() => { this.winner(3);  }, 1000);
        setTimeout(() => { this.resetGame();  }, 3500);
      }
    }
  }

  checkGame(): number {
    let draw: number = 0;
    let i: number;
    if (this.marks[0] == 'X' && this.marks[1] == 'X' && this.marks[2] == 'X') {
      if(this.blockGame == 0) {
        this.showWinner('0', '1', '2');
        this.scoreP1++;
        this.blockGame = 1;
      }
      return 1;
    } else if (this.marks[0] == 'O' && this.marks[1] == 'O' && this.marks[2] == 'O') {
      if(this.blockGame == 0) {
        this.showWinner('0', '1', '2');
        this.scoreP2++;
        this.blockGame = 1;
      }
      return 2;
    }else if (this.marks[3] == 'X' && this.marks[4] == 'X' && this.marks[5] == 'X') {
      if(this.blockGame == 0) {
        this.showWinner('3', '4', '5');
        this.scoreP1++;
        this.blockGame = 1;
      }
      return 1;
    } else if (this.marks[3] == 'O' && this.marks[4] == 'O' && this.marks[5] == 'O') {
      if(this.blockGame == 0) {
        this.showWinner('3', '4', '5');
        this.scoreP2++;
        this.blockGame = 1;
      }
      return 2;
    }else if (this.marks[6] == 'X' && this.marks[7] == 'X' && this.marks[8] == 'X') {
      if(this.blockGame == 0) {
        this.showWinner('6', '7', '8');
        this.scoreP1++;
        this.blockGame = 1;
      }
      return 1;
    } else if (this.marks[6] == 'O' && this.marks[7] == 'O' && this.marks[8] == 'O') {
      if(this.blockGame == 0) {
        this.showWinner('6', '7', '8');
        this.scoreP2++;
        this.blockGame = 1;
      }
      return 2;
    }else if (this.marks[0] == 'X' && this.marks[3] == 'X' && this.marks[6] == 'X') {
      if(this.blockGame == 0) {
        this.showWinner('0', '3', '6');
        this.scoreP1++;
        this.blockGame = 1;
      }
      return 1;
    } else if (this.marks[0] == 'O' && this.marks[3] == 'O' && this.marks[6] == 'O') {
      if(this.blockGame == 0) {
        this.showWinner('0', '3', '6');
        this.scoreP2++;
        this.blockGame = 1;
      }
      return 2;
    }else if (this.marks[1] == 'X' && this.marks[4] == 'X' && this.marks[7] == 'X') {
      if(this.blockGame == 0) {
        this.showWinner('1', '4', '7');
        this.scoreP1++;
        this.blockGame = 1;
      }
      return 1;
    } else if (this.marks[1] == 'O' && this.marks[4] == 'O' && this.marks[7] == 'O') {
      if(this.blockGame == 0) {
        this.showWinner('1', '4', '7');
        this.scoreP2++;
        this.blockGame = 1;
      }
      return 2;
    }else if (this.marks[2] == 'X' && this.marks[5] == 'X' && this.marks[8] == 'X') {
      if(this.blockGame == 0) {
        this.showWinner('2', '5', '8');
        this.scoreP1++;
        this.blockGame = 1;
      }
      return 1;
    } else if (this.marks[2] == 'O' && this.marks[5] == 'O' && this.marks[8] == 'O') {
      if(this.blockGame == 0) {
        this.showWinner('2', '5', '8');
        this.scoreP2++;
        this.blockGame = 1;
      }
      return 2;
    }else if (this.marks[0] == 'X' && this.marks[4] == 'X' && this.marks[8] == 'X') {
      if(this.blockGame == 0) {
        this.showWinner('0', '4', '8');
        this.scoreP1++;
        this.blockGame = 1;
      }
      return 1;
    } else if (this.marks[0] == 'O' && this.marks[4] == 'O' && this.marks[8] == 'O') {
      if(this.blockGame == 0) {
        this.showWinner('0', '4', '8');
        this.scoreP2++;
        this.blockGame = 1;
      }
      return 2;
    }else if (this.marks[2] == 'X' && this.marks[4] == 'X' && this.marks[6] == 'X') {
      if(this.blockGame == 0) {
        this.showWinner('2', '4', '6');
        this.scoreP1++;
        this.blockGame = 1;
      }
      return 1;
    } else if (this.marks[2] == 'O' && this.marks[4] == 'O' && this.marks[6] == 'O') {
      if(this.blockGame == 0) {
        this.showWinner('2', '4', '6');
        this.scoreP2++;
        this.blockGame = 1;
      }
      return 2;
    }else {
      for(i = 0; i < 9; i++) {
        if(this.board[i] != 0) {
          draw = 1;
        }else {
          return 3;
        }
      }
      if(draw == 1) {
        return 4;
      }
      return 3;
    }
  }

  showWinner(place1: string, place2: string, place3: string) {
    var el1 = document.getElementById(place1);
    var el2 = document.getElementById(place2);
    var el3 = document.getElementById(place3);
    el1.classList.add('winner');
    el2.classList.add('winner');
    el3.classList.add('winner');
  }

  winner(playerWinner: number) {
    if(playerWinner == 1) {
      Swal.fire({
        imageUrl: './assets/img/p1Star.png',
        imageWidth: 50,
        imageHeight: 50,
        title: '<p style="color: red;font-family: simple-font;font-size: 4rem;">Congratulations!</p>',
        html: '<p style="color: red;font-family: simple-font;font-size: 3rem;">Player 1 WINS!</p>',
        background: '#000',
        customClass: {

        },
        allowOutsideClick: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        showConfirmButton: false,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        timer: 3500,
      });
    }else if(playerWinner == 2) {
      Swal.fire({
        imageUrl: './assets/img/p2Star.png',
        imageWidth: 50,
        imageHeight: 50,
        title: '<h1 style="color: yellow;font-family: simple-font;font-size: 4rem;">Congratulations!</h1>',
        html: '<h3 style="color: yellow;font-family: simple-font;font-size: 3rem;">Player 2 WINS!</h3>',
        background: '#000',
        allowOutsideClick: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        showConfirmButton: false,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        timer: 3500,
      });
    }else if(playerWinner == 3) {
      Swal.fire({
        imageUrl: './assets/img/draw.png',
        imageWidth: 50,
        imageHeight: 50,
        title: '<h1 style="color: #7a58ec;font-family: simple-font;font-size: 4rem;">Draw!</h1>',
        html: '<h3 style="color: #7a58ec;font-family: simple-font;font-size: 3rem;">Try again</h3>',
        background: '#000',
        allowOutsideClick: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        showConfirmButton: false,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        timer: 3500,
      });
    }
  }

  resetScore() {
    this.blockClick = 1;
    this.blockGame = 1;
    this.clickResetScore = 'animate__fadeIn_click';
    setTimeout(() => { this.resetGame(); }, 2000);
    this.scoreP1 = 0;
    this.scoreP2 = 0;
  }

  resetGame() {
    let i: number;
    this.blockGame = 0;
    this.blockClick = 0;
    this.turnP1 = 'turn-p1';
    this.turnP2 = '';
    this.time = 'p1';
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.marks = ['', '', '', '', '', '', '', '', ''];
    this.player = ['', '', '', '', '', '', '', '', ''];
    this.clickResetScore = '';
    for (i = 0; i < 9; i++) {
      var element = document.getElementById(i.toString());
      element.classList.add('cursor-pointer');
      element.classList.remove('winner');
    }
  }

  backStartScreen() {
    this.router.navigate(['/tictactoe']);
  }
}
