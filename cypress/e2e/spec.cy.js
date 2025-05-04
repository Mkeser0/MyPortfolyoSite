describe('Dark Mode Toggle Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.wait(3000); // Toastify bildiriminin kapanması için bekle
  });

  it('should toggle dark mode on and off', () => {
    
    cy.get('[data-cy="app-container"]').should('not.have.class', 'dark');

    cy.get('[data-cy="dark-mode-toggle"]').click();

    cy.get('[data-cy="app-container"]').should('have.class', 'dark');

    cy.get('[data-cy="dark-mode-toggle"]').click();

    cy.get('[data-cy="app-container"]').should('not.have.class', 'dark');
  });

  it("should switch language between English and Turkish", () => {
    // Başlangıç dili İngilizce ise Türkçe butonu görünecek
    cy.contains("TÜRKÇE").should("exist");

    // Hero başlığı İngilizce
    cy.contains("Hi").should("exist");

    // Butona tıkla
    cy.contains("TÜRKÇE").click();

    // Artık "SWITCH TO ENGLISH" yazmalı
    cy.contains("SWITCH TO").should("exist");

    // Hero başlığı Türkçe olmalı
    cy.contains("Merhaba").should("exist");

    // Tekrar İngilizceye dön
    cy.contains("SWITCH TO").click();

    // Hero başlığı tekrar İngilizce
    cy.contains("Hi").should("exist");
  });

});
