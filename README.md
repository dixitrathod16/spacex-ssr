# spacex-ssr
SpaceX Launch Programs - Project to demonstrate Server Side Rendering using React and Node.js

This is a sample front end react project which is Server Side Rendered. 

Server Side rendering means rendering your React components on the Server and sending HTML pages pre-populated ro the client - This can lead to a better user experience and Search Engine discoverability.

On the browser, when the javascript runs, react will realize that the component is already there and take over for front-end interactivity, skipping the initial render.

# Technology
- Creation of node server using Express which will render the content for initial request

- Creation of React components using latest React features such as react hooks, react routers etc. 

- Data Fetching on the Server using isomorphic-fetch package

- Data Fetching with Routing (Server-side & Client-side)

- Use of Webpack and Babel Scripts for Build Workflow to create final executable build.

- Use of Media Queries to create fully responsive UI for Mobile, Tablet and Desktop views.

# Build & Run Instructions

1. This repository contains both the original source code of the project

2. To build and run the code in this directory, ensure you have [npm](https://www.npmjs.com) installed

3. Install : clone this repository, navigate to the directory of project from terminal and run below commands to install dependencies.
```
npm install
```

4. Start the application : Run below command from the project directory to start the project
```
npm start
```
5. Opne the browser and navigate to localhost:5001

You'll see below startup page.

# Desktop:

![image](https://github.com/dixitrathod16/spacex-ssr/blob/main/screenshots/Desktop%20Screenshot.PNG)

# Tablet:

![image](https://github.com/dixitrathod16/spacex-ssr/blob/main/screenshots/tablet%20screenshot.png)

# Mobile:

![image](https://github.com/dixitrathod16/spacex-ssr/blob/main/screenshots/mobile%20Screenshot%201.png)
![image](https://github.com/dixitrathod16/spacex-ssr/blob/main/screenshots/mobile%20screenshot%202.png)

# Lighthouse Score:
![image](https://github.com/dixitrathod16/spacex-ssr/blob/main/screenshots/Lighthouse%20Score.PNG)
