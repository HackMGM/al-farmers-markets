// All markets-related publications

import { Meteor } from 'meteor/meteor';
import { Markets } from '../markets.js';

Meteor.publish('markets.all', function () {
  return Markets.find();
});
