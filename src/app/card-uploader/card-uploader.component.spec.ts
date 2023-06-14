import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUploaderComponent } from './card-uploader.component';

describe('CardUploaderComponent', () => {
  let component: CardUploaderComponent;
  let fixture: ComponentFixture<CardUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
