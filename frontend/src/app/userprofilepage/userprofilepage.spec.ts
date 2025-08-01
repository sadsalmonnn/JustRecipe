import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userprofilepage } from './userprofilepage';

describe('Userprofilepage', () => {
  let component: Userprofilepage;
  let fixture: ComponentFixture<Userprofilepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userprofilepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userprofilepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
