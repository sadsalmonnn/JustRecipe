import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titlesection } from './titlesection';

describe('Titlesection', () => {
  let component: Titlesection;
  let fixture: ComponentFixture<Titlesection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titlesection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titlesection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
