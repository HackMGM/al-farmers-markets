// Methods related to Markets

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Markets } from './markets.js';

Meteor.methods({
  'markets.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Markets.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
