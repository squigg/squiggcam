import { SquiggcamPage } from './app.po';

describe('squiggcam App', () => {
  let page: SquiggcamPage;

  beforeEach(() => {
    page = new SquiggcamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
