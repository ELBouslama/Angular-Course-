import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvComponentComponent } from './cv-component.component';

describe('CvComponentComponent', () => {
  let component: CvComponentComponent;
  let fixture: ComponentFixture<CvComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
