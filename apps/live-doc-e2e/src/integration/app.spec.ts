import { getGreeting } from '../support/app.po';

describe('live-doc', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to live-doc!');
  });
});
