## Movie Generator using React.js

### Let us randomly decide which movie you should watch next ! - Integrated with [TMDB Movie API](https://www.themoviedb.org/documentation/api)

### Demo

![Demo Video](https://github.com/mansi-manhas/movie-generator/blob/main/ezgif.com-gif-maker.gif)

### Tech Stack

- [React.js](https://reactjs.org/) for creating interactive and component based UIs.
- [Node.js](https://nodejs.org/en/) for setting up the application environment.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) for handling states and react features without creating a class.
- [TMDB Movie API](https://www.themoviedb.org/documentation/api) for using their API and populating the DB with sample data.

### Application Flow
- Application will show a default movie at the first load.
- Clicking on CTA 'Generate New Movie' will randomly generate a new movie for the user.
- The UI displays
   - Movie's title
   - Cover Image of the Movie
   - Movie's Ratings
   - Genres of the Movie
   - Release Year
   - General Description
   - Production Countries
   - Production Companies

- In case movie's details are not available, an alert box is shown the user.
- Using `fontAwesome` ,  `useState` and `useEffect` helpers.
- For fetching the API, the application is using `fetch` helper.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
