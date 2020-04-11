import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdnComponent } from './odn.component';

describe('OdnComponent', () => {
  let component: OdnComponent;
  let fixture: ComponentFixture<OdnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
