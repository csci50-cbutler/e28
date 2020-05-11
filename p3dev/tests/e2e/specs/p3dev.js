import { between } from "vuelidate/lib/validators"

describe('P3', () => {
    it('Visits the homepage', () => {
        cy.visit('/')
        cy.contains('h2', 'Contact Center News')
        cy.contains('[data-test="home-content"]', 'Welcome to the North America contact center site.')
        cy.contains('[data-test="featured-reps"]', 'Candace Cleveland')
        cy.get('[data-test="cc-news"] > li')
        cy.visit('./src/assets/images/csr5.jpg')
    })


    it('Visits the manager hub and looks around', () => {
        cy.visit('/mgrhub')
        cy.contains('div', 'Workforce Management')
        cy.contains('div', 'Reports & Analytics')
        cy.contains('span', 'Manager/Agent Interaction')
        cy.contains('[data-test="wfm-link"]', 'Rep Management, Scheduling, Reports')
        cy.contains('[data-test="knowledge-link"]', 'Knowledge Base & Business Rules')
        cy.visit('/src/assets/images/twitter2.png')
        cy.visit('/src/assets/images/contactCenter.jpg')

    })

    it('Visits the dashboard & gets a headache', () => {
        // Initial page and major section headings
        cy.visit('/dashboard')
        cy.contains('h2', 'Contact Center Floor View')
        cy.contains('h2', 'Call Monitoring')
        cy.contains('h2', 'Contact, Customer & Connectivity KPIs')
        cy.contains('span', 'Manager/Agent Interaction')
        cy.get('[data-test="open-sidenav"]').click()
        cy.get('[data-test="close-sidenav"]').click()
        cy.title().should('eq', 'p3dev')

        //This section addresses the components called by the dashboard page
        //Dash cards with queue counts
        let chatReqCount = 10
        cy.contains('h4', 'Live Chat & Chatbot')
        cy.contains('h4', 'Product Requests')
        cy.contains('h4', 'Twitter Contacts')
        cy.get('[data-test="agent-count"]').exists
        cy.get('[data-test="priority-count"]').exists

        //Graphs
        cy.contains('[data-test="gauge-graph"]', '% Calls Completed')
        cy.get('td').eq(2)

        //Geo Details--Validating map loads and all 9 rows of static data loaded
        cy.get('tr').eq(2)
        cy.get('tr').eq(4)
        cy.get('tr').eq(8)
        cy.get('iframe').should('have.attr', 'src', 'https://maps.google.com/maps?q=north%20america&t=&z=13&ie=UTF8&iwloc=&output=embed')
        cy.get('iframe').should('be.visible')

        //Shift details form and table of employees from collections
        //Setting the employee
        let employee = {
            id: 'sovereign1',
            name: 'Elizabeth Montbatten',
            title: 'Queen',
            shift: 'Day',
            starttime: '07:00',
            endtime: '13:00',
            supervisor: 'Karen Johnson',
        }

        cy.get('[data-test="emp-id"]').type(employee.id);
        cy.get('[data-test="input-emp-name"]').type(employee.name);
        cy.get('[data-test="input-emp-title"]').type(employee.title);
        cy.get('[data-test="input-emp-shift"]').type(employee.shift);
        cy.get('[data-test="input-emp-starttime"]').type(employee.starttime);
        cy.get('[data-test="input-emp-endtime"]').type(employee.endtime);
        cy.get('[data-test="input-emp-supervisor"]').type(employee.supervisor);
        cy.get('[data-test="form-submit"]').click()

        //Used to validate submit added success message 
        const myPromise = new Promise((resolve, reject) => {
            // Use setTimeout(...) to simulate async code.
            setTimeout(() => {
                resolve({
                    type: 'success',
                    message: 'Employee has been added'
                })
            }, 2500)
        })

        it('should wait for promises to resolve', () => {
            cy.wrap(myPromise).its('message').should('eq', 'Employee has been added')
        })

        // Iterates over the rows in the employee table after adding
        cy.get('tr>td').each(() => {})

    })

    //Admin Page
    it('Check admin page for countdown', () => {
        cy.visit('/admin')
        cy.contains('h2', 'Reveal Day is May 31, 2021')
    })
})