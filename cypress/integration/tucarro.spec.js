describe("realizacion prueba pagina tucarro", () => {
    it("visita a la pagina tucarro", () => {
      cy.visit("https://www.tucarro.com.co/");
      cy.tucarro()
    });
  });
  