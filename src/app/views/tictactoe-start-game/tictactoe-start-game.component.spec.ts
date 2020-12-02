import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeStartGameComponent } from './tictactoe-start-game.component';

describe('TictactoeStartGameComponent', () => {
  let component: TictactoeStartGameComponent;
  let fixture: ComponentFixture<TictactoeStartGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoeStartGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoeStartGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
