import { AppPage } from './app.po';

describe('ng-hello-world App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello WORLD!');
  });
});
