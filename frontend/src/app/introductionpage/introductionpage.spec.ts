import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introductionpage } from './introductionpage';

describe('Introductionpage', () => {
  let component: Introductionpage;
  let fixture: ComponentFixture<Introductionpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introductionpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introductionpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
