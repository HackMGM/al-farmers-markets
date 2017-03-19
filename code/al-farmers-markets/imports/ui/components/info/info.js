import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Markets } from '/imports/api/markets/markets.js';

import '/imports/ui/components/AddMarket/AddMarket.js';

import './info.html';

// Make markets available in global scope for use by autoform.
window.Markets = Markets;

Template.info.onCreated(function () {
  var instance = this;
  Meteor.subscribe('markets.all');
  instance.state = new ReactiveDict();
});

Template.info.events({
  'change .city-filter'(event, instance) {
    instance.state.set('cityFilter', event.target.value);
  },
});

Template.info.helpers({
  cities() {
    let markets = Markets.find({}).fetch();
    console.log(markets);
    let cities = [];
    for (let i = 0; i < markets.length; i++) {
      var city = markets[i].address_city;
      // TODO: Add support for IE < 9 by using libray for this.
      if (-1 === cities.indexOf(city)) {
        cities.push(city);
      }
    }
    console.log(cities);
    return cities;
  },
  markets() {
    const instance = Template.instance();
    const cityFilter = instance.state.get('cityFilter');
    if (cityFilter) {
      return Markets.find({ address_city: cityFilter });
    } else {
      return Markets.find({});

    }
  },
});

