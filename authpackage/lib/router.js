// import { Meteor } from "meteor/meteor";

// Router.configure({
//     layoutTemplate: 'layout'
// });

// Router.map(function(){
//     this.route('/', function(){
//        this.render('search');
//     })
    
//     this.route('/artist/:id', function(){
//         Meteor.call ('getArtist', this.params.id, (err,artist)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(artist);
//                 this.render('artist', {data: artist});
//             }
//         });
//     });
// })