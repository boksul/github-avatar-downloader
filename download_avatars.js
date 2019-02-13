var request = require('request');
var secrets = require('./secrets');
console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
    },
    authorization: secrets['GITHUB_TOKEN']
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, resultString) {
  // console.log("Errors:", err);
  const results = JSON.parse(resultString);
  for (var i = 0; i < results.length; i++) {
    console.log(results[i].avatar_url)
  }

  // console.log('There are', results.length, 'results');
  // console.log(JSON.stringify(JSON.parse(result), null, 2));
});

