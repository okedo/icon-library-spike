import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WqIconsComponent } from './wq-icons.component';

describe('WqIconsComponent', () => {
  let component: WqIconsComponent;
  let fixture: ComponentFixture<WqIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WqIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WqIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
