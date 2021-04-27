import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningNumbersComponent } from './winning-numbers.component';

describe('WinningNumbersComponent', () => {
  let component: WinningNumbersComponent;
  let fixture: ComponentFixture<WinningNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinningNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
