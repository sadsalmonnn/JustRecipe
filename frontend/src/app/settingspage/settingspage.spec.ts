import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Settingspage } from './settingspage';

describe('Settingspage', () => {
  let component: Settingspage;
  let fixture: ComponentFixture<Settingspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Settingspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Settingspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
