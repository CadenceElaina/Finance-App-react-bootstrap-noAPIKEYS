## FinHub

### About
-User can select dark or light mode from header
-Allows the user to get a quote of stocks/equtities searched by the symbol/ticker
-Allows user to add that quote to their watchlist
-remove items from watchlist and track number of quotes in watchlist
-gets financial news from bing search API
-gets trending stocks from API and displays in table
-user can navigate to a specific stock/equities overview page that shows a chart, news, financials, etc.

### What I learned / improved on
-fetching data from multiple APIs, limiting calls to avoid going over API limits, mapping and rendering data from JSON
-State management
-React Context API
-Hook usage
-Managing props
-Conditional rendering of data, sections, and styles
-how to use React-Router-Dom to link to pages based on a variable. Ex: path="/detail/:symbol" - the symbol being the dynamic variable that changes based on which symbol the user selects in their watchlist or in the search bar. As well as improved understanding over navigation in React.
-refractoring
-project and file structure

## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)
