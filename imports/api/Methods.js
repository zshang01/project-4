import {Meteor} from 'meteor/meteor';

Meteor.methods({
    'searchArtists'(searchText){
        const result = HTTP.call ('GET','https://api.spotify.com/v1/search?query=' + searchText + '&offse=0&limit=20&type=artist&market=US');
        return result.data.artists.items;

    },

    'getArtist'(id){
        const result = HTTP.call ('GET','https://api.spotify.com/v1/artists/id');

        return result.data;
    }
})