describe('Login Functionality', () => {
  it('login_berhasil', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('be.visible')
    cy.url().should('include', '/inventory.html')
  })

  it('password_salah',() =>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauc')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('username_salah',() =>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_use')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})