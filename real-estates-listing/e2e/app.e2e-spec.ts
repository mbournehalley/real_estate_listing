import { RealEstatesListingPage } from './app.po';

describe('real-estates-listing App', function() {
  let page: RealEstatesListingPage;

  beforeEach(() => {
    page = new RealEstatesListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
