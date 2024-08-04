### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
Let's Gogh! displays exhibitions from the Art Institute of Chicago (AIC) with the intention of allowing users to save artifacts they wish to see. Upon page load, users will see the first ten artifacts provided by the AIC and a short description (when available) when hovering over the image. Users then have the ability to search for exhibitions by title or phrase contained within the API, and store artifacts they wish to visit to a "Bucket List". If the user wishes to learn more about the displayed artifacts, a larger image renders with a full description, place of origin, date, and style. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1) Access the form here: https://github.com/zachwolek/rt-peter-zach
2) Copy the SSH repository URL git@github.com:zachwolek/lets-gogh.git
3) Open terminal and 'cd' into the directory you wish to clone 
4) Clone the repository by submitting `git clone git@github.com:zachwolek/lets-gogh.git`

For Testing:
1) cd into the directory and run 'npm start' in the terminal
2) In another tab in your terminal, run 'npm run cy:open" 
3) Choose e2e testing
4) Run on your browser of choice (Preferebly Chrome)
5) Select 'homepage.cy.js', 'pageload.cy.js', 'saved.cy.js', or 'search.cy.js' in the browser

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![Preview description](https://imgur.com/a/NYWvLDx)
When determining whether or not to save an item to the user's Saved Items "Bucket List", a short description of the exhibition displays when hovering over the image itself. 


### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project was assigned in two parts over Weeks 14 and 15 of Turing's School of Software and Design. This project was the the Final Showcase Project of Turing's "Module 3", with each module being six weeks in length. This Final Showcase Project was chosen as a passion project to continue to build forward after graduation 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
Zach Wolek: https://github.com/zachwolek/

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The primary learning goal of this project was to build a single app using React and React Router to simulate a multi-page app.  

Technologies across the project involved React, Browser Routing, JSX, Cypress, React Hooks, PropTypes, HTML, JS/ES6, and CSS. 


### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
1) The Art Institute of Chicago provides an incredible free API I would reccomend to nearly anyone looking to get practice. With so much being available, easily the most difficult challenge was navigating the [API Docs](https://api.artic.edu/docs/) which allow you the freedom to retreiving anything desired. The greatest challenge was finding a way to navigate the API, which involved mapping a list of IDs for each search result, fetching each individual exhibition for image information, then mapping an array of promises to achieve image data for all searched items. 
2) Another challenge was learning how to incorporate JSX for conditional rendering, which was a fun challenge. With thousands of exhibitions, several are missing certain pieces of information. Learning to conditionally render HTML components only if the API data contained information was a fun challenge to learn the capabilities of React and JSX