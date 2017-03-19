import './AddMarket.html';



Template.AddMarket.events({
    'submit #insertMarketForm'(event) {
        event.preventDefault();

        const target = event.target;
        const market = {
            'name': target.name.value,
            'address_county': target.address_county.value,
            'address_street': target.address_street.value,
            'address_city': target.address_city.value,
            'address_state': target.address_state.value,
            'address_zip': target.address_zip.value,
            'contact_website': target.contact_website.value,
            'contact_facebook': target.contact_facebook.value,
            'contact_email': target.contact_email.value,
            'contact_contact_string': target.contact_contact_string.value,
            'information_covered_facility': target.information_covered_facility.checked ? true : false,
            'open_hours_season_summary': target.open_hours_season_summary.value
        }

        Meteor.call('markets.insert', market, (error) => {
            if (error) {
                alert(error.error);
            } else {
                target.name.value = '';
            }
        });
    },
});
