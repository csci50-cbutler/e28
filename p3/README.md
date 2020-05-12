# Project 3:  Contact Center Website Using Vuelidate, Vuex State Management & Testing Tools
# By: Cecilia Butler
## Netlify Production URL: http://e28p3.prodtechub.me

## Outside resources
This project coincides with a real world project.  My employer standardizes on several frameworks and technologies.  For my final project, project #3,  the following outside resources were used.  
1. Webpage Design & Templates for dashboard design template.  In addition help with CSS styling and colors: 
	- [Bootstrap](https://getbootstrap.com/)
	- [w3Schools.com](https://www.w3schools.com/Css/css_rwd_templates.asp) 
2. Fonts with [Google Fonts](https://fonts.google.com/)
3. Charts using:
	- [Syncfusion](https://www.syncfusion.com/)
	- [Chartjs](https://www.chartjs.org/)
	- [ChartKick](https://chartkick.com/)
4. Images: 
	- [Google Images](https://images.google.com/)
	- Icons using [FontAwesome](https://fontawesome.com/)

For the course project assignment, the following resources are: 
1. Development & Troubleshooting: 
	- Vuejs.org
	- [Vuex](https://vuex.vuejs.org/)
	- [Cypress E2E Testing](https://www.cypress.io/)
	- [Stackoverflow](https://stackoverflow.com/)
	- [Google Firebase/Firestore](https://firebase.google.com/)
	- [NPM Countdown](https://www.npmjs.com/package/vuejs-countdown) package for the "Under Construction" countdown clock on the Administration webpage.


## Notes for instructor
**Vuex state management** is used on the DashboardPage.vue page to manage the queue count amounts displayed on the 8 "cards" at the top of the page.

**Vuelidate** is used to validate the form used by the ShiftDetails.vue component that is imported into the DashboardPage.vue webpage.  Three fields are validated: 

 - Name
 - Shift
 - Supervisor

**Unit Testing**  using Mocha and Chai was performed on the AdminPage.vue webpage.  The data test, countdown-timer, was assigned to a Countdown component tag to test that it renders.  In addition, a unit test on a value and on a class provided by the NPM Countdown component.  Mount was used to check child elements instead of shallowMount.

**Note:**  The class for "vuejs-countdown" is provided by the NPM Countdown package.  A test was done on the class which is a child element of the countdown element.  

**E2E Testing** with Cypress.  Tested all pages and components at the header level or within the component.  For GraphDash.vue, the bubble chart (3rd chart) uses imports from Chartkick and Chartjs.  It will error out when manipulated required tags expecting specific attributes and values.  It is formatted within and HTML5 table.  The test checks if the the bubble chart data exists by checking table data location.

    cy.get('td').eq(2)


### Additional Information
The following changes have been made to the DashboardPage.vue webpage:
 - **DashboardPage.vue:**  This page now imports major sections of the page using separate components.  The information is provided in the subsequent bulleted items.
 - **DashQueues.vue:**  This component provides the cards at the top of the page.  Vuex is used for statement management of the queue counts for each of the 8 cards shown.
 - **GraphDash.vue:**  This section contains 3 graphs.  It calls BubbleChart.vue to simulate a graph section of a dashboard.  This component uses the Vue state management to take the Vuex stored state values of the dash queue values (from DashQueues.vue) to populate the values for the donut chart.  The donut chart is the center graph that displays terminated calls by termination type.
 - **BubbleChart.vue:**  The bubble chart in the graphs section of the dashboard webpage.
 - **CallsByGeo.vue:** This section imports a map and static data simulating data collection by geography.
 - **ShiftDetails.vue:**  This is a form section simulating workforce and shift management.  This section uses Vuelidate to validate the name, shift and supervisor.
 - **CallMetrics.vue:**  This section uses static data to simulate status bars providing call, performance, and order metrics.

**Note:**  For background, this project is modeled after a business use case.   Our team is re-designing some of our enterprise software.  One of which is contact center/tech support related.  The product design direction is to allow for personalization of dashboards.  The goal is to allow users to drag and drop what they want to see on a page.  The modularization is also to help simplify changes.