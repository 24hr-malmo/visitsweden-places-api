#Places of Sweden

Interact with VisitSweden's Places of Sweden API

##Install
Install with npm:

`npm install visitsweden-places-api`

##Usage
Simple usage example:

	var placesClient = require("visitsweden-places-api");
	
	// you need to specify your appKey when creating the client
	var client = new placesClient({
		appKey: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
	});
	
	// search for places of type "region" and with a name that matches "land"
	var params = {
		types: "region",
		name: "land"
	};
	
	client.searchPlaces(params, function(err, json){
		
	});
	
	// get place with id XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	var params = {};
	var id = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";

	client.getPlace(id, params, function(err, json){
		
	});

