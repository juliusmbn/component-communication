import { AngularComponentCommunicationPage } from './app.po';

describe('angular-component-communication App', () => {
  let page: AngularComponentCommunicationPage;

  beforeEach(() => {
    page = new AngularComponentCommunicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
