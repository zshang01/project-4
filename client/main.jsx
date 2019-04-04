import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import "../imports/startup/accounts-config.js";

//search events
// Template.search.events({
//   'keyup #searchArtist': function(){
//     let searchText = event.target.value;
//     if (searchText == ''){
//       Session.set('artists', null);
//     };
//     Meteor.call('searchArtist', searchText, (err,artist) => {
//         if (err){
//           console.log(err);
//         }else {
//           console.log(result);
//         }
//     });
//   } 
//   });

var options = {
  showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
  requestPermissions: ['user-read-email'] // Spotify access scopes.
};
Meteor.loginWithSpotify(options, function(err) {
  console.log(err || "No error");
  console.log(Meteor.user().find()) 
    
  }
  );

Meteor.startup(() => {

  // var authpackage = require('authpackage');
 
  // authpackage.hello();
  ReactDOM.render(<App />, document.getElementById('react-target'));
 
  });
