var request = require('request');

function parseBody(response){
  return response.split("(").pop().split(")")[0];
}

function getPrice(symbol, callback) {
  request("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol="+symbol+"&callback=myFunction", function(error, response, body){
      var jsonString = parseBody(body);
      // turn string into JSON object
      var parsed = JSON.parse(jsonString)
      callback(false, parsed["LastPrice"])
  });
}

exports.getPrice = getPrice;
