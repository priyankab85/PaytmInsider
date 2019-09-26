describe('Paytm Insider Test suite',() => {
    beforeEach(()=> {
        cy.viewport(1500,1200)
        //cy.clearCookies()
        cy.visit('https://insider.in/')
        cy.url().should('eq','https://insider.in/')
    })

    it('Display element count on console log',() => {
        //command to display on dev console
        console.log('City List: ')
        cy.get('.city-list').contains('Pune').click()

        //Assert url contains '/pune'
        cy.url().should('include','/pune')

        //Navigate to the desired category i.e. Browse events by genres
        cy.get('.card-list-wrapper.category-wrapper .card-list-head span').scrollIntoView()

        //Click on the see more button of the above specified category
        cy.get('.accordion-title').contains('Show more').click()
        
        //.each() : to count each element under the defined class
        let ele_count=0 
          cy.get('.category-card').each(() =>{
            ele_count++
            console.log(ele_count)
            })
        //Get the last element count by using .last()  
          cy.get('.category-card').last().then(()=>{
             //command to display on Cypress UI Test runner's log  
             cy.log('Count of elements is',ele_count)
        })

     })

})