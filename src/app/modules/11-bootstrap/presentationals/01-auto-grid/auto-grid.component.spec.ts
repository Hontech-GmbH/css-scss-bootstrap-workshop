import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoGridComponent } from './auto-grid.component';

describe('AutoGridComponent', () => {
  let component: AutoGridComponent;
  let fixture: ComponentFixture<AutoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
