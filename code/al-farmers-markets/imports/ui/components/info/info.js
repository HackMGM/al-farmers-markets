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

Template.info.onRendered(function () {
  console.log('rendered');
  // Wait 2 sec for page to render.
  setTimeout(function () {
    // Adapted from http://stackoverflow.com/a/19640897/908677
    var map;
    var elevator;
    var myOptions = {
      zoom: 12,
      center: new google.maps.LatLng(32.3798522, -86.2971825),
      mapTypeId: 'terrain'
    };
    map = new google.maps.Map($('#map_canvas')[0], myOptions);

    $('.address').each(function (index) {
      var address = $(this).text();
      var name = $(this).parent().find('.name').text();
      console.log('address = ' + address);
      //for (var x = 0; x < addresses.length; x++) {
      $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + address, null, function (data) {
        console.log('got result:');
        console.log(data.results);
        var p = data.results[0].geometry.location
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        new google.maps.Marker({
          position: latlng,
          map: map,
          title: name + '\n' + address
        });

      });
    });

  }, 2000);
});

Template.info.events({
  'change .city-filter'(event, instance) {
    instance.state.set('cityFilter', event.target.value);
  },
});

Template.info.helpers({
  cities() {
    let markets = Markets.find({}).fetch();
    let cities = [];
    for (let i = 0; i < markets.length; i++) {
      var city = markets[i].address_city;
      // TODO: Add support for IE < 9 by using libray for this.
      if (-1 === cities.indexOf(city)) {
        cities.push(city);
      }
    }
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

