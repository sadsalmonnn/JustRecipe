import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfoundpage } from './notfoundpage';

describe('Notfoundpage', () => {
  let component: Notfoundpage;
  let fixture: ComponentFixture<Notfoundpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfoundpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notfoundpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
