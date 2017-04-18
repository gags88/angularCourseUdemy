import { AngularCoursePage } from './app.po';

describe('angular-course App', () => {
  let page: AngularCoursePage;

  beforeEach(() => {
    page = new AngularCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
