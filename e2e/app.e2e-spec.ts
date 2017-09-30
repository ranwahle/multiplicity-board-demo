import { ShiriPage } from './app.po';

describe('shiri App', () => {
  let page: ShiriPage;

  beforeEach(() => {
    page = new ShiriPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
