import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoretmComponent } from './moretm.component';

describe('MoretmComponent', () => {
  let component: MoretmComponent;
  let fixture: ComponentFixture<MoretmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoretmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoretmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
