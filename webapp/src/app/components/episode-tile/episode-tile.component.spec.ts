import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeTileComponent } from './episode-tile.component';

describe('EpisodeTileComponent', () => {
  let component: EpisodeTileComponent;
  let fixture: ComponentFixture<EpisodeTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
