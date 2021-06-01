import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangeHobbiComponent } from './strange-hobbi.component';

describe('StrangeHobbiComponent', () => {
  let component: StrangeHobbiComponent;
  let fixture: ComponentFixture<StrangeHobbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrangeHobbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrangeHobbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
