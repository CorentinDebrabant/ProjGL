import { Livre } from './livre';

describe('Livre', () => {
  it('should create an instance', () => {
    expect(new Livre("J.R.R Tolkien","Fantasy","0123456789","...","Seigneur des anneau",25.99,"Plop")).toBeTruthy();
  });
});
