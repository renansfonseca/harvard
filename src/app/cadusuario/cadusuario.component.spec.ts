import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadusuarioComponent } from './cadusuario.component';

describe('CadusuarioComponent', () => {
  let component: CadusuarioComponent;
  let fixture: ComponentFixture<CadusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadusuarioComponent]
    });
    fixture = TestBed.createComponent(CadusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
