import { TestBed, async } from '@angular/core/testing';
import { HeadToHeadComponent } from './headtohead.component';
describe('HeadToHeadComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeadToHeadComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HeadToHeadComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'upmoji-client'`, async(() => {
    const fixture = TestBed.createComponent(HeadToHeadComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('upmoji-client');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HeadToHeadComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to upmoji-client!');
  }));
});
