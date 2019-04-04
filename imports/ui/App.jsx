import React, { Component }from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import HomePage from "./HomePage.js";
import Music from "./Music.js";
import { Container } from "semantic-ui-react";
import "../style/app.css";
import LoginWithSpotify from "./LoginWithSpotify"


import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Signup from './Signup';
import Link from './Link';
import NotFound from './NotFound';
import Login from './Login';


class App extends Component {

	render() {
		return (
			<div id = "app">
					<Container>
						<Header />
						<Login />
						
						<br />
						
						{
							Meteor.user() ? 

							<Music />
							: 
							
							<LoginWithSpotify />	
						}
						<br />
						
					
						<br />
					
						<Footer />
						<br />
				
					</Container>
			</div>
		);
	}
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(App);