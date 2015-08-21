var request = require('request');

function parseBody(response){
  return response.split("(").pop().split(")")[0];
}

function getPrice(symbol, callback) {
  request("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol="+symbol+"&callback=myFunction", function(error, response, body){
    if(error){
      callback(error);
    } else{
      var jsonString = parseBody(body);
      // turn string into JSON object
      var parsed = JSON.parse(jsonString)
      callback(null, parsed["LastPrice"])
    }
  });
}

exports.getPrice = getPrice;
