import {Meteor} from "meteor/meteor";
import React, {Component} from 'react';


 var options ={
    showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
    requestPermissions: ['user-read-email'] // Spotify access scopes.
  };

export default class LoginWithSpotify  extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }

      render (){
        return (
			<div id = "login">
				<h1>Login works</h1>

        
        </div>
        )		
		
      }
    }
   
    Meteor.loginWithSpotify = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Spotify.requestCredential(options, credentialRequestCompleteCallback);
  };