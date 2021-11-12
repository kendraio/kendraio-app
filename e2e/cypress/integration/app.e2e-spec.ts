describe('workspace-project App', () => {
  beforeEach(() => cy.visit('http://localhost:4200/'));

  it('should display welcome message', () => {
      cy.contains('Kendraio App');
  });
});