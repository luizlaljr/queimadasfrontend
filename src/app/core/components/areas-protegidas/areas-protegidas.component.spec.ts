import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasProtegidasComponent } from './areas-protegidas.component';

describe('AreasProtegidasComponent', () => {
  let component: AreasProtegidasComponent;
  let fixture: ComponentFixture<AreasProtegidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasProtegidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasProtegidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
