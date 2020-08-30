import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningPage } from './learning.page';

describe('LearningPage', () => {
  let component: LearningPage;
  let fixture: ComponentFixture<LearningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
