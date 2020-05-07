# Project 2:  Single Page Application with Vue-router and Single File Components
# By: Cecilia Butler

## Production URL: http://e28p2.prodtechhub.me

## Pages Summary

 1. Home Page:  The home page for the contact center shared by all contact center employees.
 2. Managers Hub:   Page that has non-working links simulating access to applications used by the manager.
 3. Contact Center Dashboard:  Web page that illustrates a dashboard of a call center.  Most of the data is static.  The shift data is pulled using Axios API.
 4. Administration:  Webpage that indicates it is under construction using a countdown clock SFC.

## SFC Summary
I used vue router for page management and the main.js script provided was updated to control navigation.

 1. AdminPage.vue:  Is the under construction SFC for the Administration page.  It is accessible via the navigation bar.
 2. DashboardPage.vue:  A dashboard page accessible via the Dashboard button on the navigation bar.  It contains the script for server interaction with Axios to get employee data.
 3. HomePage.vue:  Home page of the website.
 4. MgrhubPage.vue:  Web page accessible by the Manager Hub button on the navigation bar.  It illustrates non-functional icon buttons that would normally integrate with several applications used by a manager.
 5. BubbleChart.vue:  Provides a bubble chart simulating the monitoring of a KPI.
 6. App.vue:  Updated to provide menu and header that is consistent throughout the site.
 
## Server Interaction
I used [Google's Firebase](https://firebase.google.com/) for my for server interaction.  The "Dashboard" page automatically updates with the latest shift workers. This table can be found under the dasboard section Employee & Shift Details.  

From that same section, a user can "add" an employee to a shift and get an updated table after clicking enter.

## Outside resources
This project coincides with a real world project.  My employer standardizes on several frameworks and technologies.  For this project the the following outside resources were used.  
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
5. Development & Troubleshooting: 
	- Vuejs.org
	- [Stackoverflow](https://stackoverflow.com/)
	- [Github](https://github.com/)
	- [JSON Placeholder](https://jsonplaceholder.typicode.com/)
	- [Google Firebase/Firestore](https://firebase.google.com/)
	- NPM Countdown package for the "Under Construction" countdown clock on the Administration webpage.


## Notes for instructor
For background information, this site and some of the design templates is work related.  The selection design of the Manager Hub and the Dashboard page is based upon UI input.  The color choices "so information jumps out aft you", is also inspired by the feedback along with some of the graphs and KPIs in the segments on the page.

The Manager Hub page and the other pages have no functionality at this time. 

All data other than the shift data is static.