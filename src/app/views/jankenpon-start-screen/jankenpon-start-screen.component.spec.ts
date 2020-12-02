import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanKenPonStartScreenComponent } from './jankenpon-start-screen.component';

describe('JankenponStartScreenComponent', () => {
  let component: JanKenPonStartScreenComponent;
  let fixture: ComponentFixture<JanKenPonStartScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanKenPonStartScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanKenPonStartScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
