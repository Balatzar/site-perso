import { SitePersoPage } from './app.po';

describe('site-perso App', function() {
  let page: SitePersoPage;

  beforeEach(() => {
    page = new SitePersoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
