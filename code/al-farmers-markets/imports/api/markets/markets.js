// Definition of the markets collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Markets = new Mongo.Collection('markets');

Markets.schema = new SimpleSchema({
    'name': { type: String },
    'address_county': { type: String },
    'address_street': { type: String },
    'address_city': { type: String },
    'address_state': { type: String },
    'address_zip': { type: String },
    'contact_website': { type: String, optional: true },
    'contact_facebook': { type: String, optional: true },
    'contact_email': { type: String, optional: true },
    'contact_contact_string': { type: String, optional: true },
    'information_covered_facility': { type: Boolean, optional: true },
    'open_hours_season_summary': { type: String },
    'season_month_start': { type: String, optional: true }, // e_g_ 1-12
    'season_day_number_start': { type: String, optional: true }, // e_g_ 1-31
    'season_month_end': { type: String, optional: true }, // e_g_ 1-12
    'season_day_number_end': { type: String, optional: true }, // e_g_ 1-31
    // Open times
    'hours_weekly_mon_start': { type: String, optional: true }, // e_g_ 6:00 AM
    'hours_weekly_tue_start': { type: String, optional: true }, // e_g_ 6:00 AM
    'hours_weekly_wed_start': { type: String, optional: true }, // e_g_ 6:00 AM
    'hours_weekly_thu_start': { type: String, optional: true }, // e_g_ 6:00 AM
    'hours_weekly_fri_start': { type: String, optional: true }, // e_g_ 6:00 AM
    'hours_weekly_sat_start': { type: String, optional: true }, // e_g_ 6:00 AM
    'hours_weekly_sun_start': { type: String, optional: true }, // e_g_ 6:00 AM
    // Close times
    'hours_weekly_mon_end': { type: String, optional: true }, // e_g_ 3:00 PM
    'hours_weekly_tue_end': { type: String, optional: true }, // e_g_ 3:00 PM
    'hours_weekly_wed_end': { type: String, optional: true }, // e_g_ 3:00 PM
    'hours_weekly_thu_end': { type: String, optional: true }, // e_g_ 3:00 PM
    'hours_weekly_fri_end': { type: String, optional: true }, // e_g_ 3:00 PM
    'hours_weekly_sat_end': { type: String, optional: true }, // e_g_ 3:00 PM
    'hours_weekly_sun_end': { type: String, optional: true }, // e_g_ 3:00 PM
    // Force value to be current date (on server) upon insert
    // and prevent updates thereafter_
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return { $setOnInsert: new Date() };
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    },
    // Force value to be current date (on server) upon update
    // and don't allow it to be set upon insert_
    updatedAt: {
        type: Date,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        },
        optional: true
    }
});

Markets.attachSchema(Markets.schema);