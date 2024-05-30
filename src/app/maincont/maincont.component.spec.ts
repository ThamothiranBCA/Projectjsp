import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontComponent } from './maincont.component';

describe('MaincontComponent', () => {
  let component: MaincontComponent;
  let fixture: ComponentFixture<MaincontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaincontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaincontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
