describe('Debug', () => {
  it('Can\'t intercept every algolia call', () => {
    cy.viewport('macbook-11')
    cy.setCookie('gdid', 'cypress')
    cy.intercept('**/indexes/*/queries').as('algolia')
    // cy.request("POST","https://e7phe9bb38-dsn.algolia.net/1/indexes/*/queries");
    cy.visit('https://www.gofundme.com/s?q=help')

    cy.wait('@algolia').its('response.statusCode').should('eq', 200)
  })
})
