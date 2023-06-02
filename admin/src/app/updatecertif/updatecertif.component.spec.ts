import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecertifComponent } from './updatecertif.component';

describe('UpdatecertifComponent', () => {
  let component: UpdatecertifComponent;
  let fixture: ComponentFixture<UpdatecertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecertifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
