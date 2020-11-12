import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcompComponent } from './excomp.component';

describe('ExcompComponent', () => {
  let component: ExcompComponent;
  let fixture: ComponentFixture<ExcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
