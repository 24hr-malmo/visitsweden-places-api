var request = require('request');
var querystring = require('qs');

var placesClient = module.exports = function( config ) {
    this.config = config;
    this.baseUrl = 'http://api.places.visitsweden.com/'; // base url for the API
    this.searchUrl = this.baseUrl + 'places/'; // search for places
    this.placeUrl = this.searchUrl + 'place/'; // single place
    this.autocompleteUrl = this.searchUrl + 'autocomplete/'; // autocomplete places
    this.searchContentUrl = this.baseUrl + 'contents/'; // search content
    this.contentUrl = this.searchContentUrl + 'content/'; // single content

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

    // http://places.visitsweden.com/Reference/ContentAPI.aspx#searchingcontents
    this.searchContent = function(params, callback) {

        var url = this.searchContentUrl;

        this.makeRequest(url, params, callback);

    };

    // http://places.visitsweden.com/Reference/ContentAPI.aspx#singlecontent
    this.getContent = function(id, params, callback) {

        var url = this.contentUrl + id;

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