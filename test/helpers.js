var Client = require('../lib/Up').Client;

var password = process.env.JAWBONE_PASSWORD || exports.loadConfig().password;
var username = process.env.JAWBONE_USERNAME || exports.loadConfig().username;

exports.createClient = function() {
  return new Client({
    username: username,
    password: password
  });
};

exports.loadConfig = function() {
  try {
    return require('./config.json');
  }
  catch (e) {
    console.log('Error loading test/config.json');
    console.log('test/config.json is required. See config.json.sample for guidance.');
    process.exit(1);
  }
};