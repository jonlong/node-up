var Client = require('../lib/Up').Client;

exports.createClient = function() {
  return new Client({
    username: exports.loadConfig().username,
    password: exports.loadConfig().password
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