import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEAMComponent } from './team.component';

describe('TEAMComponent', () => {
  let component: TEAMComponent;
  let fixture: ComponentFixture<TEAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TEAMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TEAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
