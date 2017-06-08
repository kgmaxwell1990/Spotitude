import { SpotitudePage } from './app.po';

describe('spotitude App', () => {
  let page: SpotitudePage;

  beforeEach(() => {
    page = new SpotitudePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
