import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeStartScreenComponent } from './tictactoe-start-screen.component';

describe('TictactoeStartScreenComponent', () => {
  let component: TictactoeStartScreenComponent;
  let fixture: ComponentFixture<TictactoeStartScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoeStartScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoeStartScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
