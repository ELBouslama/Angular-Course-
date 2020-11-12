import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowComponentComponent } from './rainbow-component.component';

describe('RainbowComponentComponent', () => {
  let component: RainbowComponentComponent;
  let fixture: ComponentFixture<RainbowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainbowComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
