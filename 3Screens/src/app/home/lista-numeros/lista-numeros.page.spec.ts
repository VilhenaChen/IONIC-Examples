import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaNumerosPage } from './lista-numeros.page';

describe('ListaNumerosPage', () => {
  let component: ListaNumerosPage;
  let fixture: ComponentFixture<ListaNumerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNumerosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNumerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
