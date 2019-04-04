import { Meteor } from 'meteor/meteor';

// This example is via `service-configuration`
ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "<fcecfc72172e4cd267473117a17cbd4d>",
      "secret": "a6338157c9bb5ac9c71924cb2940e1a7"
    }
  },
  { upsert: true }
);


var spotifyApi = new SpotifyWebApi();

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});