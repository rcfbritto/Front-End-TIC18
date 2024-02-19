import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorRodapeComponent } from './valor-rodape.component';

describe('ValorRodapeComponent', () => {
  let component: ValorRodapeComponent;
  let fixture: ComponentFixture<ValorRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorRodapeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValorRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
