import { Markets } from '/imports/api/markets/markets.js';

import { Meteor } from 'meteor/meteor';

import '/imports/ui/components/AddMarket/AddMarket.js';

import './info.html';

// Make markets available in global scope for use by autoform.
window.Markets = Markets;

Template.info.onCreated(function () {
  Meteor.subscribe('markets.all');
  
});

Template.info.helpers({
  markets() {
    return Markets.find({});
  },
});

