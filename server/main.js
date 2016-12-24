import { Meteor } from 'meteor/meteor';

Items = new Mongo.Collection("items");
Campaigns = new Mongo.Collection("campaigns");
Characters = new Mongo.Collection("characters")
Accounts = new Mongo.Collection("accounts");
Messages = new Mongo.Collection("messages");

Meteor.startup(() => {
    // code to run on server at startup
});
