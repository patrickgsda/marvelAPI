import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSearchedComponent } from './character-searched.component';

describe('CharacterSearchedComponent', () => {
  let component: CharacterSearchedComponent;
  let fixture: ComponentFixture<CharacterSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSearchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
