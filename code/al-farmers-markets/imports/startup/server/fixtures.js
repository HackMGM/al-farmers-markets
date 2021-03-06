// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Markets } from '../../api/markets/markets.js';

Meteor.startup(() => {
    // if the Links collection is empty
    if (Links.find().count() === 0) {
        const data = [
            {
                title: 'Do the Tutorial',
                url: 'https://www.meteor.com/try',
                createdAt: new Date(),
            },
            {
                title: 'Follow the Guide',
                url: 'http://guide.meteor.com',
                createdAt: new Date(),
            },
            {
                title: 'Read the Docs',
                url: 'https://docs.meteor.com',
                createdAt: new Date(),
            },
            {
                title: 'Discussions',
                url: 'https://forums.meteor.com',
                createdAt: new Date(),
            },
        ];

        data.forEach(link => Links.insert(link));
    }

    // if the Markets collection is empty
    if (Markets.find().count() === 0) {
        const data = [
            {
                'name': 'Montgomery Curb Market',
                'address_county': 'Montgomery',
                'address_street': '1004 Madison Ave',
                'address_city': 'Montgomery',
                'address_state': 'AL',
                'address_zip': '36104',
                'contact_website': null,
                'contact_facebook': 'https://www.facebook.com/Montgomery-Curb-Market-279923578708900',
                'contact_email': null,
                'contact_contact_string': 'TO_ADD_VIA_ADMIN_DASHBOARD',
                'information_covered_facility': true,
                'open_hours_season_summary': 'Tuesdays, Thursdays & Saturdays, 5am-2pm, Year Round'
            },
            {
                'name': 'Fairview Farmers Market',
                'address_county': 'Montgomery',
                'address_street': '60 W Fairview Ave',
                'address_city': 'Montgomery',
                'address_state': 'AL',
                'address_zip': '36105',
                'contact_website': null,
                'contact_facebook': 'https://www.facebook.com/fairviewfarmersmarket',
                'contact_email': 'fairviewfarmersmarket@gmail.com',
                'contact_contact_string': 'TO_ADD_VIA_ADMIN_DASHBOARD',
                'information_covered_facility': true,
                'open_hours_season_summary': 'Monday-Saturday 7am-6pm, Sunday 8am-4pm, Year Round'
            },
            {
                'name': 'Eastchase Farmers Market',
                'address_county': 'Montgomery',
                'address_street': '7274 Eastchase Pkwy',
                'address_city': 'Montgomery',
                'address_state': 'AL',
                'address_zip': '36117',
                'contact_website': 'http://www.theshoppesateastchase.com',
                'contact_facebook': 'https://www.facebook.com/The-Shoppes-at-Eastchase-Farmers-Market-183581578469943',
                'contact_email': 'john@aplinfarms.com',
                'contact_contact_string': 'TO_ADD_VIA_ADMIN_DASHBOARD',
                'information_covered_facility': false,
                'open_hours_season_summary': 'Saturdays, 7am-12pm, May 14-October 22'
            },
        ];

        data.forEach(link => Markets.insert(link));
    }
});
