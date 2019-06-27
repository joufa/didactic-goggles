import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontainerComponent } from './admincontainer.component';

describe('AdmincontainerComponent', () => {
  let component: AdmincontainerComponent;
  let fixture: ComponentFixture<AdmincontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincontainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
