import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowwishlistComponent } from './showwishlist.component';

describe('ShowwishlistComponent', () => {
  let component: ShowwishlistComponent;
  let fixture: ComponentFixture<ShowwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowwishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
