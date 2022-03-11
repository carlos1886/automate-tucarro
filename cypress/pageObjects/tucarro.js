export default class tucarro {
  static button() {
    return cy.xpath('//button[@class="ui-button ui-button--tertiary tc-modal-btn-secondary"]')
  }
  static selecttipo() {
    return cy.xpath("//select[@id='category']").select("Carros y camionetas", { force: true });
  }
  static selectmarca() {
    return cy.xpath("//select[@id='category__l2']").select("Audi", { force: true });
  }
  static selectveh() {
    return cy.xpath("//select[@id='category__l3']").select("A4", { force: true });
  }
  static buscar() {
    return cy.get(".ch-btn > span");
  }
  static año(){
  return cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .ui-search-button-link > .ui-search-filter-name')
}
  static ima() {
    return cy.xpath('//img[@alt="Audi A4 2.0 Tfsi Ambition"]')
  }
  static selectmarcaAlfa() {
    return cy.xpath("//select[@id='category__l2']").select("Alfa Romeo", { force: true });
  }
  static selectvehMit() {
    return cy.xpath("//select[@id='category__l3']").select("Mito", { force: true });
  }
  static año1(){
    return cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .ui-search-button-link > .ui-search-filter-name')
  }
  static ima2() {
    return cy.xpath('//img[@alt="Alfa Romeo Mito Distinctive 1400cc Mt Aa"]')
  }
  static selectmarcaChe() {
    return cy.xpath("//select[@id='category__l2']").select("Chevrolet", { force: true });
  }
  static selectvehCap() {
    return cy.xpath("//select[@id='category__l3']").select("Captiva", { force: true });
  }
  static año2(){
    return cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .ui-search-link > .ui-search-filter-name')
  }
  static ima3() {
    return cy.xpath('//img[@alt="Chevrolet Captiva Captiva Premier 2022"]')
  }
}
