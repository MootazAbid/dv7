import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { AddSportComponent } from './add-sport.component';

describe('AddSportComponent', () => {
  let component: AddSportComponent;
  let fixture: ComponentFixture<AddSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSportComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
