import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Items = new Mongo.Collection("items");
Campaigns = new Mongo.Collection("campaigns");
Characters = new Mongo.Collection("characters");
Accounts = new Mongo.Collection("accounts");


Meteor.startup(function() {
    process.env.ROOT_URL = "https://34.193.226.176:3000";
});
