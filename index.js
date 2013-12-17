var request = require('request');
var querystring = require('qs');

var placesClient = module.exports = function( config ) {
    this.config = config;
    this.searchUrl = 'http://api.places.visitsweden.com/places/';
    this.placeUrl = this.searchUrl + 'place/';
    this.autocompleteUrl = this.searchUrl + 'autocomplete/';

    // http://places.visitsweden.com/Reference/PlacesAPI.aspx#searchingplaces
    this.searchPlaces = function(params, callback) {

        var url = this.searchUrl;

        this.makeRequest(url, params, callback);

    };

    // http://places.visitsweden.com/Reference/PlacesAPI.aspx#singleplace
    this.getPlace = function(id, params, callback) {

        var url = this.placeUrl + id;

        this.makeRequest(url, params, callback);

    };

    // http://places.visitsweden.com/Reference/PlacesAPI.aspx#placeautocompletion
    this.autoComplete = function(params, callback) {

        var url = this.autocompleteUrl;

        this.makeRequest(url, params, callback);

    };

    this.makeRequest = function(baseUrl, params, callback) {

        // build querystring and append it to the url
        if( !params.appKey ) {
            params.appKey = this.config.appKey;
        }
        var qs = '?' + querystring.stringify(params);
        var url = baseUrl + qs;

        request.get(url, function(err, r, body) {

            if(err) { callback(err, null); return; }

            callback(null, JSON.parse(body));

        });

    };

};