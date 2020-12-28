import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaArrayPage } from './lista-array.page';

describe('ListaArrayPage', () => {
  let component: ListaArrayPage;
  let fixture: ComponentFixture<ListaArrayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaArrayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaArrayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
