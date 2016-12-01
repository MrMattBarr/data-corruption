import { Meteor } from 'meteor/meteor';

Items = new Mongo.Collection("items");

Meteor.startup(() => {
    // code to run on server at startup
});
