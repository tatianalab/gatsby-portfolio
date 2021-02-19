import ashtongagnon from '../images/ashtongagnon1.png'
import counterargument from '../images/counterargument1.png'
import pwoveb from '../images/pwoveb1.png'
import spotitunes from '../images/spotitunes1.png'
import react from '../images/react.svg';
import bootstrap from '../images/bootstrap.svg';
import css from '../images/css-icon.svg';
import github from '../images/github-icon.svg';
import heroku from '../images/heroku.svg';
import netlify from '../images/netlify.svg';
import javascript from '../images/javascript.svg';
import rails from '../images/rails.svg';
import ruby from '../images/ruby.svg';
import sass from '../images/sass.svg';
import surge from '../images/surge.svg';
import webpack from '../images/webpack.svg';

export const ProjectsData = {
  heading: "AG Avocats.Lawyers",
  paragraphOne: "This client website was transformed from a wordpress elementor site to a React SPA. It was redesigned, built and deployed to netlify in 5 days. I made use of react styled components and data files in order to reuse a similar general styles on multiple components.",
  paragraphTwo:"Site translation enabled with i18next. Two locale json files contain all the text content of the site and are called depending on user preference. React smooth scroll enables scroll to different components and back to top on page change. All components are reusable styled components. The contact form is connected to emailjs in order to function.",
  buttonLabel:"Visit App",
  image:ashtongagnon,
  reverse:true,
  tools: [react, webpack, css, github, netlify],
  link:"https://www.ashtongagnonavocats.com/"
}

export const ProjectsDataTwo = {
  heading: "CounterArgument",
  paragraphOne: "This MVP was designed, implemented and shipped to production in a 10 day sprint, using Ruby On Rails and MVC architecture (model, view, controller), as my final project for Le Wagon coding bootcamp. We worked as a SCRUM team of 4 people, taking turns at developing and implementing different features. CounterArgument is an app where a user can search for short, clear and sourced counterarguments and/or give counters to arguments that were provided by the community. The DB has a many to many relationship, with an argument being/having a parent argument, and thus also being/having a child argument.",
  paragraphTwo:"The AlgoliaSearch gem was added to enable a user to search by keyword or sentence for topics or existing arguments. A user is able to upvote another user's argument as funny, accurate or well-sourced. Users cannot upvote their own arguments. A user receives a notification when one of their arguments is upvoted or countered.  badge system was added attached to number of votes. A user can counter or add an argument anonymously, or change a submitted argument to anonymous.",
  buttonLabel:"Visit App",
  image:counterargument,
  reverse:false,
  tools:[ruby, rails, sass, javascript, github, heroku],
  link:"http://www.counterargument.ca/"
}

export const ProjectsDataThree = {
  heading: "Pwovèb Kreyòl",
  paragraphOne: "This is a Haitian Creole Quote generator with search, which was create and deployed to netlify in 2 days. I am Haitian, and I found the freeCodeCamp random quote generator challenge a bit dull. I decided to personalize this challenge a bit. I started out by scraping a few websites with Haitian quotes and transformed my CSV to a JSON for my Data(API coming soon). The button onClick generates a random quote from my Data. I also added a random background color change function onClick, which depending on the RGB value, changes the header colors between black and white. The search function was enabled using Regex exec() and filter() methods once the search term.length > 1.",
  paragraphTwo:"he user can search for a quote by typing a term into the search bar. The user can generate a random quote by clicking the button. The State of the displayed quote changes when the user clicks on a quote from the search results. A random background color is generated when the user the state of the displayed quote is updated. A user can share the displayed quote on Facebook or Twitter.",
  buttonLabel:"Visit App",
  image:pwoveb,
  reverse:true,
  tools: [react, webpack, css,github],
  link:'http://pwovebkreyol.netlify.app/'
}

export const ProjectsDataFour = {
  heading: "SpotiTunes",
  paragraphOne: "This project was built as part of a Codecademy challenge in their React curriculum. It was designed, implemented and deployed to Surge in 2 days. This front-end React app uses the Spotify API. It is built with 7 class components, with state being in the App component. Using the SearchBar component, a user must be signed-in to their Spotify account in order to search for tracks, artists or albums which once fetched are displayed as Track components in the TrackList components. The Tracklist component is rendered in both the SearchResults component and the PlayList component. A user can add Tracks from SearchResults to PlayList. Tracks can also be removed from the PlayList. The new state of the PlayList can then be named and saved to the Spotify account of the user.",
  paragraphTwo:"Once the user's access token is verified, the search function using a term as argument, fetches track uris from Spotify API. While a track is not yet in the PlayList, a user can add it. A track in the PlayList can be removed. Once a PlayList component has a name and trackUris argument, it can be saved using a POST method to the Spotify API.",
  buttonLabel:"Visit App",
  image:spotitunes,
  reverse:false,
  tools: [react, webpack, css,surge],
  link:"http://spotitunes.surge.sh/"
}
