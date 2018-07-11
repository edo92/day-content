var request = require("request");

// constructor function to create new omdb api objects
function Omdb(key) {
  // store key as part of base url
  this.url = "http://www.omdbapi.com/?apikey=" + key;

  this.search = function(title, callback) {
    // do a generic search against the api based on the title given
    request(this.url + "&s=" + title, function(error, response, body) {
      // send back parsed "Search" array
      callback(JSON.parse(body).Search);
    });
  };

  this.get = function(title, callback) {
    // do a specific search against the api
    request(this.url + "&t=" + title, function(error, response, body) {
      // send back the movie object
      callback(JSON.parse(body));
    });
  };
}

module.exports = Omdb;