import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CredencialObraSocialPage } from './credencial-obra-social.page';

describe('CredencialObraSocialPage', () => {
  let component: CredencialObraSocialPage;
  let fixture: ComponentFixture<CredencialObraSocialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CredencialObraSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
