import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComentsPage } from './coments.page';

describe('ComentsPage', () => {
  let component: ComentsPage;
  let fixture: ComponentFixture<ComentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
