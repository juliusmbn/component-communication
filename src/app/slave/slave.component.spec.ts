import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveComponent } from './slave.component';

describe('SlaveComponent', () => {
  let component: SlaveComponent;
  let fixture: ComponentFixture<SlaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
