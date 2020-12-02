import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

declare let Swal: any;

@Component({
  selector: 'app-jankenpon-start-screen',
  templateUrl: './jankenpon-start-screen.component.html',
  styleUrls: ['./jankenpon-start-screen.component.css']
})
export class JanKenPonStartScreenComponent implements OnInit {

  hideButton: string;
  playerCharacter: Array<string>;
  playerCharacterNames: Array<string>;
  playerCharacterName: string;
  playerCharacterImg: string;
  computerCharacter: Array<string>;
  computerCharacterImg: string;
  rockComputer: string;
  paperComputer: string;
  scissorComputer: string;
  thinkComputer: Array<string>;
  thinkComputerImg: string;
  computerScore: number;
  rockPlayer: string;
  paperPlayer: string;
  scissorPlayer: string;
  thinkPlayer: Array<string>;
  thinkPlayerImg: string;
  playerScore: number;
  cell: Array<string>;
  cellTimer: number;
  clickBlock: boolean;
  blockReset: boolean;
  blockStart: boolean;
  timeCheckWinner: number;
  hideChoiceBtn: string;
  hideStartScreen: string;
  startScreen: string;
  startBehavior: string
  title1Behavior: string;
  title2Behavior: string;
  title3Behavior: string;
  moveBehavior: string;
  choosePlayerModalRef: BsModalRef;
  screenRoute: string;
  blockBackBtn: boolean;
  @ViewChild('choosePlayerModal')  choosePlayerModal;
  config: ModalOptions = {
    backdrop: 'static',
    keyboard: false,
    animated: true,
    ignoreBackdropClick: true
  };

  constructor(private modalService: BsModalService, private router: Router) {
    this.hideButton = 'hide-btn';
    this.cell = ['', '', '', '', '', '', '', '', '', ''];
    this.rockComputer = './assets/img/rock_right.png';
    this.paperComputer = './assets/img/paper_right.png';
    this.scissorComputer = './assets/img/scissor_right.png';
    this.rockPlayer = './assets/img/rock_left.png';
    this.paperPlayer = './assets/img/paper_left.png';
    this.scissorPlayer = './assets/img/scissor_left.png';
    this.thinkComputer = [this.rockComputer, this.paperComputer, this.scissorComputer];
    this.thinkComputerImg = this.thinkComputer[0];
    this.thinkPlayer = [this.rockPlayer, this.paperPlayer, this.scissorPlayer];
    this.thinkPlayerImg = this.thinkPlayer[0];
    this.clickBlock = false;
    this.blockReset = false;
    this.hideChoiceBtn = 'hide-choice-btn';
    this.computerScore = 0;
    this.playerScore = 0;
    this.hideStartScreen = '';
    this.startScreen = 'hide-sprites';
    this.startBehavior = 'animate__flipInX';
    this.title1Behavior = 'animate__zoomInDown';
    this.title2Behavior = 'animate__jackInTheBox';
    this.title3Behavior = 'animate__zoomInUp';
    this.moveBehavior = '';
    this.blockBackBtn = true;
  }

  ngOnInit(): void {
    this.blockStart = false;
    this.hideButton = 'hide-btn';
    this.playerCharacter = ['./assets/img/bat_1.png', './assets/img/man_1.png', './assets/img/swoman_1.png', './assets/img/woman_1.png'];
    this.playerCharacterNames = ['Batman', 'SuperMan', 'SuperWoman', 'WonderWoman'],
    this.playerCharacterName = this.playerCharacterNames[0];
    this.playerCharacterImg = this.playerCharacter[0];
    this.computerCharacter = ['./assets/img/r2d2_1.png', './assets/img/r2d2_2.png', './assets/img/r2d2_3.png', './assets/img/r2d2_4.png', './assets/img/r2d2_1.png'];
    this.computerCharacterImg = this.computerCharacter[0];
    this.cell = ['', '', '', '', '', '', '', '', '', ''];
    this.rockComputer = './assets/img/rock_right.png';
    this.paperComputer = './assets/img/paper_right.png';
    this.scissorComputer = './assets/img/scissor_right.png';
    this.rockPlayer = './assets/img/rock_left.png';
    this.paperPlayer = './assets/img/paper_left.png';
    this.scissorPlayer = './assets/img/scissor_left.png';
    this.thinkComputer = [this.rockComputer, this.paperComputer, this.scissorComputer];
    this.thinkComputerImg = this.thinkComputer[0];
    this.thinkPlayer = [this.rockPlayer, this.paperPlayer, this.scissorPlayer];
    this.thinkPlayerImg = this.thinkPlayer[0];
    this.clickBlock = false;
    this.hideChoiceBtn = 'hide-choice-btn';
    this.computerScore = 0;
    this.playerScore = 0;
    this.screenRoute = 'Choose Game';
    setTimeout(() => { this.startBehavior = 'animate__fadeIn'; }, 1000);
    setTimeout(() => { this.title1Behavior = 'animate__shakeX'; }, 1500);
    setTimeout(() => { this.title2Behavior = 'animate__pulse'; }, 1500);
    setTimeout(() => { this.title3Behavior = 'animate__rubberBand'; }, 1500);
  }

  start() {
    if(!this.blockStart) {
      this.screenRoute = 'Back';
      this.blockStart = true;
      this.title1Behavior = 'animate__zoomOutDown';
      this.title2Behavior = 'animate__bounceOut';
      this.title3Behavior = 'animate__zoomOutUp';
      this.startBehavior = 'animate__fadeIn_click';
      setTimeout(() => { this.startBehavior = 'hide-sprites'; }, 900);
      setTimeout(() => { this.title1Behavior = 'hide-sprites'; }, 900);
      setTimeout(() => { this.title2Behavior = 'hide-sprites'; }, 900);
      setTimeout(() => { this.title3Behavior = 'hide-sprites'; }, 900);
      setTimeout(() => { this.hideStartScreen = 'hide-sprites'; }, 2000);
      setTimeout(() => { this.choosePlayer(); }, 1000);
    }
  }

  choosePlayer() {
    this.blockBackBtn = false;
    this.choosePlayerModalRef = this.modalService.show(this.choosePlayerModal, this.config);
  }

  selectPlayer(choice: string) {
    if(choice == 'L') {
      this.moveBehavior = 'animate__fadeOutLeft';
      if(this.playerCharacterName == 'Batman') {
        this.playerCharacterName = this.playerCharacterNames[3];
        this.playerCharacterImg = this.playerCharacter[3];
      }else if(this.playerCharacterName == 'SuperMan') {
        this.playerCharacterName = this.playerCharacterNames[0];
        this.playerCharacterImg = this.playerCharacter[0];
      }else if(this.playerCharacterName == 'SuperWoman') {
        this.playerCharacterName = this.playerCharacterNames[1];
        this.playerCharacterImg = this.playerCharacter[1];
      }else if(this.playerCharacterName == 'WonderWoman') {
        this.playerCharacterName = this.playerCharacterNames[2];
        this.playerCharacterImg = this.playerCharacter[2];
      }
      this.moveBehavior = 'animate__fadeInLeft';
      setTimeout(() => { this.moveBehavior = ''; }, 900);
    }else if(choice == 'R') {
      this.moveBehavior = 'animate__fadeOutRight';
      if(this.playerCharacterName == 'Batman') {
        this.playerCharacterName = this.playerCharacterNames[1];
        this.playerCharacterImg = this.playerCharacter[1];
      }else if(this.playerCharacterName == 'SuperMan') {
        this.playerCharacterName = this.playerCharacterNames[2];
        this.playerCharacterImg = this.playerCharacter[2];
      }else if(this.playerCharacterName == 'SuperWoman') {
        this.playerCharacterName = this.playerCharacterNames[3];
        this.playerCharacterImg = this.playerCharacter[3];
      }else if(this.playerCharacterName == 'WonderWoman') {
        this.playerCharacterName = this.playerCharacterNames[0];
        this.playerCharacterImg = this.playerCharacter[0];
      }
      this.moveBehavior = 'animate__fadeInRight';
      setTimeout(() => { this.moveBehavior = ''; }, 900);
    }else if(choice == 'OK') {
      if(this.playerCharacterName == 'Batman') {
        this.playerCharacter = ['./assets/img/bat_1.png', './assets/img/bat_2.png', './assets/img/bat_3.png', './assets/img/bat_1.png', './assets/img/bat_1.png'];
        this.playerCharacterImg = this.playerCharacter[0];
      }else if(this.playerCharacterName == 'SuperMan') {
        this.playerCharacter = ['./assets/img/man_1.png', './assets/img/man_2.png', './assets/img/man_3.png', './assets/img/man_1.png', './assets/img/man_1.png'];
        this.playerCharacterImg = this.playerCharacter[0];
      }else if(this.playerCharacterName == 'SuperWoman') {
        this.playerCharacter = ['./assets/img/swoman_1.png', './assets/img/swoman_2.png', './assets/img/swoman_3.png', './assets/img/swoman_1.png', './assets/img/swoman_1.png'];
        this.playerCharacterImg = this.playerCharacter[0];
      }else if(this.playerCharacterName == 'WonderWoman') {
        this.playerCharacter = ['./assets/img/woman_1.png', './assets/img/woman_2.png', './assets/img/woman_3.png', './assets/img/woman_1.png', './assets/img/woman_1.png'];
        this.playerCharacterImg = this.playerCharacter[0];
      }
      this.choosePlayerModalRef.hide();
      this.blockBackBtn = true;
      this.startScreen = '';
    }
  }

  startGame() {
    if(this.clickBlock == false) {
      this.blockReset = false;
      this.clickBlock = true;
      this.hideChoiceBtn = '';
      this.timeCheckWinner = 0;
      this.cell = ['', '', '', '', '', '', '', '', '', ''];
      this.cellTimer = 9;
      let delay: number = 0;
      this.hideButton = '';
      setTimeout(() => {
        for(let i = 0; i < 10; i++) {
          setTimeout(() => { this.changeSpriteRobot() }, delay);
          delay += 1000;
        };
      },
      500);
    }
  }

  changeSpriteRobot() {
    let delay:number = 0;
    for(let i = 0; i < 5; i++) {
      setTimeout(() => { this.computerCharacterImg = this.computerCharacter[i]; this.playerCharacterImg = this.playerCharacter[i];}, delay);
      delay += 250;
      this.thinkComputerImg = this.thinkComputer[Math.floor(Math.random() * 3)];
    }
    this.cell[this.cellTimer] = 'hide-btn';
    this.cellTimer--;
    this.timeCheckWinner++;
    if(this.timeCheckWinner == 10) {
      this.hideButton = 'hide-btn';
      this.hideChoiceBtn = 'hide-choice-btn';
      this.checkWinner();
    }
  }

  changeThink() {
      if(this.clickBlock == true) {
        if(this.thinkPlayerImg == this.thinkPlayer[0]) {
          this.thinkPlayerImg = this.thinkPlayer[2];
        }else if(this.thinkPlayerImg == this.thinkPlayer[2]) {
          this.thinkPlayerImg = this.thinkPlayer[1];
        }else if(this.thinkPlayerImg == this.thinkPlayer[1]) {
          this.thinkPlayerImg = this.thinkPlayer[0];
        }
      }
  }

  checkWinner() {
    this.blockReset = true;
    this.clickBlock == true;
    if((this.thinkPlayerImg == this.rockPlayer) && (this.thinkComputerImg == this.rockComputer) ||
      (this.thinkPlayerImg == this.paperPlayer) && (this.thinkComputerImg == this.paperComputer) ||
      (this.thinkPlayerImg == this.scissorPlayer) && (this.thinkComputerImg == this.scissorComputer)) {
        this.resultGame(0);
    }else if((this.thinkPlayerImg == this.rockPlayer) && (this.thinkComputerImg == this.paperComputer)) {
        this.resultGame(2);
    }
    else if((this.thinkPlayerImg == this.rockPlayer) && (this.thinkComputerImg == this.scissorComputer)) {
        this.resultGame(1);
    }else if((this.thinkPlayerImg == this.paperPlayer) && (this.thinkComputerImg == this.rockComputer)) {
        this.resultGame(1);
    }else if((this.thinkPlayerImg == this.paperPlayer) && (this.thinkComputerImg == this.scissorComputer)) {
        this.resultGame(2);
    }else if((this.thinkPlayerImg == this.scissorPlayer) && (this.thinkComputerImg == this.rockComputer)) {
        this.resultGame(2);
    }else if((this.thinkPlayerImg == this.scissorPlayer) && (this.thinkComputerImg == this.paperComputer)) {
        this.resultGame(1);
    }
  }

  resultGame(winner: number) {
    if(winner == 0) {
      Swal.fire({
        imageUrl: './assets/img/exclamation.png',
        imageWidth: 50,
        imageHeight: 50,
        title: '<h1 style="color: yellow;font-family: simple-font;font-size: 4rem;">Draw!</h1>',
        html: '<h3 style="color: yellow;font-family: simple-font;font-size: 3rem;">Try Again</h3>',
        background: '#030882',
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
    }else if(winner == 1) {
      this.playerScore++;
      Swal.fire({
        imageUrl: './assets/img/medal.png',
        imageWidth: 50,
        imageHeight: 70,
        title: '<h1 style="color: yellow;font-family: simple-font;font-size: 4rem;">Congratulations!</h1>',
        html: '<h3 style="color: yellow;font-family: simple-font;font-size: 3rem;">You Win!</h3>',
        background: '#030882',
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
    }else if(winner == 2) {
      this.computerScore++;
      Swal.fire({
        imageUrl: './assets/img/heart.png',
        imageWidth: 70,
        imageHeight: 50,
        title: '<h1 style="color: yellow;font-family: simple-font;font-size: 4rem;">Oh no!</h1>',
        html: '<h3 style="color: yellow;font-family: simple-font;font-size: 3rem;">You Lose!</h3>',
        background: '#030882',
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
    this.clickBlock = false;
  }

  resetGame() {
    if(this.blockReset) {
      this.hideButton = 'hide-btn';
      this.cell = ['', '', '', '', '', '', '', '', '', ''];
      this.thinkComputerImg = this.thinkComputer[0];
      this.thinkPlayerImg = this.thinkPlayer[0];
      this.clickBlock = false;
      this.hideChoiceBtn = 'hide-choice-btn';
      this.computerScore = 0;
      this.playerScore = 0;
    }
  }

  backStartScreen() {
    if(this.blockBackBtn) {
      if(this.screenRoute == 'Back') {
        this.screenRoute = 'Choose Game';
        this.hideButton = 'hide-btn';
        this.cell = ['', '', '', '', '', '', '', '', '', ''];
        this.rockComputer = './assets/img/rock_right.png';
        this.paperComputer = './assets/img/paper_right.png';
        this.scissorComputer = './assets/img/scissor_right.png';
        this.rockPlayer = './assets/img/rock_left.png';
        this.paperPlayer = './assets/img/paper_left.png';
        this.scissorPlayer = './assets/img/scissor_left.png';
        this.thinkComputer = [this.rockComputer, this.paperComputer, this.scissorComputer];
        this.thinkComputerImg = this.thinkComputer[0];
        this.thinkPlayer = [this.rockPlayer, this.paperPlayer, this.scissorPlayer];
        this.thinkPlayerImg = this.thinkPlayer[0];
        this.clickBlock = false;
        this.blockReset = false;
        this.hideChoiceBtn = 'hide-choice-btn';
        this.computerScore = 0;
        this.playerScore = 0;
        this.hideStartScreen = '';
        this.startScreen = 'hide-sprites';
        this.startBehavior = 'animate__flipInX';
        this.title1Behavior = 'animate__zoomInDown';
        this.title2Behavior = 'animate__jackInTheBox';
        this.title3Behavior = 'animate__zoomInUp';
        this.moveBehavior = '';
        this.ngOnInit();
      }else {
        this.router.navigate(['/']);
      }
    }
  }

}
