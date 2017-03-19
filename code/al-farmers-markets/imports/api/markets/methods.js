// Methods related to Markets

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Markets } from './markets.js';

Meteor.methods({
  'markets.insert'(market) {
    // TODO: Require users to log in first.
    return Markets.insert(market);
  },
});
