# Prosjekt 2 - IT2810

## React
The application was developed using React in conjunction with typescript. 
The application consists of both class and functional components, 
but tends to favor the latter as most of the components complexity is rather low. 
Furthermore, some of the components are functional components in order to 
utilize their hooks, such as ThemeButton.tsx as the useContext-hook 
simplifies the usage of react context.
Another aspect of React that was used in the application is organizing the 
components in a hierarchical manner. 
This made the layout easier to change, 
and made the project’s structure more understandable.

## SVG or Canvas
The exhibition features animated images made in SVG. 
As opposed to HTML Canvas, it allows for animations without using scripts to 
animate. Instead the SVG images are animated using the CSS @keyframes notation. 
The images themselves are made by Freepik, 
retrieved from the website https://www.flaticon.com/authors/freepik

## Ajax
This website retrieves poems from the external API 
https://poetrydb.org/index.html using the built-in request function fetch(). 
Fetch() allows asynchronous loading, which means that even if the API is slow to
respond, the application loading time will not be affected.  

The fetching is executed in the App component so that actions regarding the 
fetch response can be accessed from multiple of App’s child components. 
These components are ArtworkBox(a child of DisplayBox) in order to display the 
poems, and SettingsBox via. a callback from App in order to generate new poems 
on user action.  

Rather than fetching and storing the entire database when the webpage is visited,
the application only fetches the number of poems needed. New poems are generated 
from the database when the user presses the designated button. 
This results in a new fetch to the API, which takes a few seconds to load. 
This is a known tradeoff because it would have taken significantly longer to 
fetch the entire database in one single request. It is also not optimal to store
such a big dataset outside of the database. However, when the page is refreshed,
poems displayed are loaded from the session storage. This is to ensure that the 
poems don’t change unless the user purposely changes them, or the website is 
visited for another session.

## HTML web storage
In order to save the users favorite parts of the exhibition, 
the HTML web storage API was utilized by setting a variable with an identifier 
for the artwork combination to be true in localStorage, so that the liked parts
would be saved between sessions. Local storage has also been used to customize
the welcoming message on returning to the application between sessions. 
Furthermore, the welcoming page utilizes session storage to prevent the 
welcoming page from displaying on refreshes. Another usage of session storage 
has been in the rendering of the ArtworkBox on refreshes. As the user is able to
change between portrait and gallery-view, as well as to show all artworks or 
only favorites, session storage saves the current style of each artwork in its 
own item so that the application renders the same page after a refresh. 
This was done as having a variable for each artwork would make fetching from the
storage easier in the code. However, it makes the storage somewhat more confusing.
An alternative to creating a variable for each artwork, 
would be to create a list or dictionary with index or key corresponding to the
identifier for each artwork, thus making the storage more organized.

## Responsve web design
The layout of the application was initially developed using div-boxes in which 
content was to be added later as it was developed. 
These boxes were then used to make the application responsive for different 
sizes of the application window using media queries, so that content could be 
added and removed from these boxes without compromising the fluidity and 
responsiveness of the application. The solution has generally worked well, 
and the development of the rest of the application has been easier as the 
responsiveness was already implemented.

## Node.js and NPM
Node.js and NPM have been utilized as described in the lectures to build the 
React application with typescript in order to save time from connecting them 
separately. Furthermore, NPM has been used as a testsuite for the 
snapshot-tests, and to run the application in end-to-end testing.

## Testing
The application was tested using snapshot testing and end-to-end testing. 
React has an integrated test module. This worked well with snapshot testing of 
React components such as the App itself, and smaller components like the button 
for toggling themes and showing favorites. Even though the module is integrated 
in React, it still needs to be installed using 
`npm install --save-dev react-test-renderer`. The test runner launches with `npm test`, and instructions are described after running. In short, ‘a’ is pressed to 
run all tests, and ‘u’ if some snapshots are outdated causing the test to fail 
and therefore needs to be updated.  

While developing the project, end-to-end testing was utilized often to make 
sure the layout scaled and objects moved as desired, both using the developer 
tools on Chrome and testing other browsers. Lastly, the website was tested on 
the different operating systems Windows and Linux, and different devices such 
as an iPhone and regular laptop.

## Git and coding
Git has been used effectively during the development process by using branches 
and issues for different parts of the development. Issues were created for 
different parts of the development, and branches were made for each issue. 
This has enabled the team to work effectively by developing different parts of 
the project at the same time. As well as branching for each issue, one 
development-branch was also maintained parallel to the master-branch. 
This way there was always a stable build on dev, making the working process 
easier to structure  
Finally, the code has been documented according to common practice where unclear
or unintuitive code is explained. 
