function sendGA4Event(client_id = "f7ce6fe3-4619-48c4-a8d2-8f2e2a11b219", user_id = "0x8C8f71d182d2F92794Ea2fCbF357814d09D222C3", event_name = "blockchain_event", transaction_id = "0xb4a23ef4a1515a74bb85709dca1487915885e2048006812df3866342a92f9766", timestamp_micros= Date.now()*1000) {

var formData =JSON.stringify(
  {"client_id": client_id,
    "user_id" : user_id,
    "timestamp_micros" : timestamp_micros,
    "events": [{
      "name": event_name,
      "params": {
        "transaction_id": transaction_id
      }
    }]
    });

//sets up MP request  
var options = {
  'method' : 'POST',
  'contentType': 'application/json',
  'payload' : formData
};

//Calls GA4 MP
//Make sure to insert your measurement ID and secret key! Note that GA4 has a different structure if you want to send in apps data  
var responseCode =  UrlFetchApp.fetch('https://www.google-analytics.com/mp/collect?measurement_id=[INSERT_YOUR_GA4_TRACKING_ID]&api_secret=[INSERT_YOUR_KEY]', options).getResponseCode();

//Returns the response of the call. If 2xx, the call was received by Google.
return responseCode; 
}
