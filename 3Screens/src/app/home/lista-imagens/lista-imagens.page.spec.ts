import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaImagensPage } from './lista-imagens.page';

describe('ListaImagensPage', () => {
  let component: ListaImagensPage;
  let fixture: ComponentFixture<ListaImagensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaImagensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaImagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
