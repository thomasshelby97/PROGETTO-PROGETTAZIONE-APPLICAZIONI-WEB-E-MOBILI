import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssorbitoreComponent } from './assorbitore.component';

describe('AssorbitoreComponent', () => {
  let component: AssorbitoreComponent;
  let fixture: ComponentFixture<AssorbitoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssorbitoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssorbitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
