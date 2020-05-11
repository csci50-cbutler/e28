describe('P3', () => {
    it('Visits the homepage', () => {
        cy.visit('/')
        cy.contains('h2', 'Contact Center News')
    })

    //Visit Each Page & eventually run through specifics of each page
    it('Visits the manager hub and looks around', () => {
        cy.visit('/mgrhub')
        cy.contains('div', 'Workforce Management')
            //visit a few divs and footer
    })

    it('Visits the dashboard & gets a headache', () => {
        cy.visit('/dashboard')
        cy.contains('h2', 'Contact Center Floor View')
            //Main page with p3 requirements --  will need to think through including side nav, forms and state with data change every few seconds
    })

    it('Check admin page for countdown', () => {
        cy.visit('/admin')
        cy.contains('h2', 'Reveal Day is May 31, 2021')
            //Find a paragraph or countdown and footer??
    })
})