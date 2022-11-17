import { Utilisateur } from './utilisateur';

describe('Utilisateur', () => {
  it('should create an instance', () => {
    expect(new Utilisateur("plop","plop@plop.fr",0,"plip")).toBeTruthy();
  });
});
