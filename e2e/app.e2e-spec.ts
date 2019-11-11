import { Angular2StripeNewPage } from './app.po';

describe('angular2-stripe-new App', function() {
  let page: Angular2StripeNewPage;

  beforeEach(() => {
    page = new Angular2StripeNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
