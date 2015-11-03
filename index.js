var request = require('request');

function parseBody(response){
  return response.split("(").pop().split(")")[0];
}

function getStockObject(symbol, callback){
  request("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol="+symbol+"&callback=myFunction", function(error, response, body){
    if(error){
      callback(error);
    } else{
      var jsonString = parseBody(body);
      // turn string into JSON object
      var stockObject = JSON.parse(jsonString)
      callback(null, stockObject)
    }
  });
}

function getPrice(symbol, callback) {
  getStockObject(symbol, function(err, stockObject){
    callback(null, stockObject["LastPrice"])
  })
}

exports.getPrice = getPrice;
