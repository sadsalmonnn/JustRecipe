import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postpage } from './postpage';

describe('Postpage', () => {
  let component: Postpage;
  let fixture: ComponentFixture<Postpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
