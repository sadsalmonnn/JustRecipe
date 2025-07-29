import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signuppage } from './signuppage';

describe('Signuppage', () => {
  let component: Signuppage;
  let fixture: ComponentFixture<Signuppage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signuppage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signuppage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
