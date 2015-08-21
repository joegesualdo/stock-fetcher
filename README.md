##Stock Fetcher
> Fetch Stock Data

##Install
```
$ npm install --save pageres
```

##Usage
```javascript
var stockFetcher = require("stock-fetcher");

stockFetcher.getPrice("AAPL", function(err, price){
  console.log(price)
});
```

##API

###.getPrice(error, callback(err, price))
