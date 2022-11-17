import { Article } from './article';

describe('Article', () => {
  it('should create an instance', () => {
    expect(new Article("J.R.R Tolkien","Fantasy",0,"0123456789","...","Seigneur des anneau", 1.0)).toBeTruthy();
  });
});
