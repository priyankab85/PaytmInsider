

context('Paytm Insider Test suite',() => {
    beforeEach(()=> {
        cy.viewport(1500,1200)
        //cy.clearCookies()
        cy.visit('https://insider.in/')
        cy.url().should('eq','https://insider.in/')
    })

    it('Events ticket purchase scenario',() => {
        //Click on 'Pune' from City-list
        cy.get('.city-list > :nth-child(7) > a').click()

        //Assert url contains '/pune'
        cy.url().should('include','https://insider.in/pune')

        //Click on first element of 'Featured Event' category
        cy.get('.card-list .carousel-item-0 .featured-card>a').click()

        //Assert url of the clicked event
        cy.url().should('include','/event')

        //Click on 'BUY NOW' button present on EDP screen of the event
        cy.get(".action-button-btns-row a.page.top.enabled[href$='/buy']").click()

        //Click on 'Buy' button present beside Tickets option
        cy.get("div.buyflow-buy > a.marionette-spa-btn[href$='/Tickets'] > button").click()

        //Select quantity=1 from first option
        cy.get(':nth-child(1) > .show-partial > .show-partial-content > .buyflow-action > .buyflow-price > .main-item-select-wrapper > .main-item-select')
        .select('1').should('have.value','1')

        //Click on the But button
        cy.get(':nth-child(1) > .show-partial > .show-partial-content > .buyflow-action > .buyflow-buy > .base-button').click()

        //Verify the url after buying the ticket
        cy.url().should('eq','https://insider.in/buy/checkout')

    })

    afterEach(()=> {
        cy.clearCookies()
    })

})