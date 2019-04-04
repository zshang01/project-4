import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';


var server = Npm.require('./server.js');

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

//let redirect_uri = process.env.REDIRECT_URI || 'http://localhost:8888/callback';


//var auth = Npm.require('spotify-web-api-js');

Meteor.startup(() => {
 

  
});
