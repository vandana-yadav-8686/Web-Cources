import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceCatagoriesComponent } from './cource-catagories.component';

describe('CourceCatagoriesComponent', () => {
  let component: CourceCatagoriesComponent;
  let fixture: ComponentFixture<CourceCatagoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourceCatagoriesComponent]
    });
    fixture = TestBed.createComponent(CourceCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
