var request = require('request');
var logError = require('./util/log-error');
var API_URI = 'https://jawbone.com/nudge/api';
var LOGIN_URI = 'https://jawbone.com/user/signin/login';

var UpClient = exports.UpClient =
  function(username, password) {
    this.username = username;
    this.password = password;
    this.service = 'nudge';
  };

// METHOD: POST
// URL: https://jawbone.com/user/signin/login
// INPUT PARAMS
//   email=user@domain.com
//   pwd=YourPassword
//   service=nudge

UpClient.prototype.auth = function(callback) {
  var self = this;
  var form = {form: {email: user, pwd: password, service: service}};

  request.post(LOGIN_URI, form, function(err, res, body) {
    if (err) {
      logError('request');
      return callback(err);
    }

    if (!err && res.statusCode == 200) {
      body = JSON.parse(body);

      if (body.error) {
        logError('login');
        err = new Error(body.error);
        return callback(err);
      }

      self.userResponse = body;
      self.token = body.token;
      return callback(null, body);
    }
  });
};

// METHOD: GET
// URL: /users/@me/social
// INPUT PARAMS
//   after=null
//   limit=30
//   _token=<your auth token>

UpClient.prototype.feedSummary = function(opts, callback) {
  var self = this;
  var path = API_URI + '/users/@me/social';
  var options = opts || {};

  request.get(path, options, function(err, res, body){
    if (err) {
      logError('request');
      return callback(err);
    }

    if (!err && res.statusCode == 200) {
      body = JSON.parse(body);

      if (body.error) {
        logError('feedSummary');
        err = new Error(body.error);
        return callback(err);
      }

      return callback(null, body);
    }
  });
};

// METHOD: GET
// URL: /users/@me/healthCredits
// INPUT PARAMS
//   date=2011-11-27
//   timezone=-28800
//   move_goal=0
//   sleep_goal=0
//   eat_goal=0
//   check_levels=1
//   _token=<your auth token>

UpClient.prototype.dailySummary = function(opts, callback) {
  var self = this;
  var path = API_URI + '/users/@me/healthCredits';
  var options = opts || {};

  request.get(path, options, function(err, res, body){
    if (err) {
      logError('request');
      return callback(err);
    }

    if (!err && res.statusCode == 200) {
      body = JSON.parse(body);

      if (body.error) {
        logError('dailySummary');
        err = new Error(body.error);
        return callback(err);
      }

      return callback(null, body);
    }
  });
};

// METHOD: GET
// URL: /users/@me/band
// INPUT PARAMS
//   start_time=1322380800 (epoch)
//   end_time=1322442000 (epoch)
//   _token=<your auth token>

UpClient.prototype.activityDetail = function(opts, callback) {
  var self = this;
  var path = API_URI + '/users/@me/band';
  var options = opts || {};

  request.get(path, options, function(err, res, body){
    if (err) {
      logError('request');
      return callback(err);
    }

    if (!err && res.statusCode == 200) {
      body = JSON.parse(body);

      if (body.error) {
        logError('activityDetail');
        err = new Error(body.error);
        return callback(err);
      }

      return callback(null, body);
    }
  });
};

// METHOD: GET
// URL: /users/@me/sleeps
// INPUT PARAMS
//   start_time=1322380800 (epoch)
//   end_time=1322442000 (epoch)
//   limit=100
//   _token=<your auth token>

UpClient.prototype.sleepSummary = function(opts, callback) {
  var self = this;
  var path = API_URI + '/users/@me/sleeps';
  var options = opts || {};

  request.get(path, options, function(err, res, body){
    if (err) {
      logError('request');
      return callback(err);
    }

    if (!err && res.statusCode == 200) {
      body = JSON.parse(body);

      if (body.error) {
        logError('sleepSummary');
        err = new Error(body.error);
        return callback(err);
      }

      return callback(null, body);
    }
  });
};

// METHOD: GET
// URL: /sleeps/@me/snapshot
// INPUT PARAMS
//   _token=<your auth token>

UpClient.prototype.sleepDetail = function(opts, callback) {
  var self = this;
  var path = API_URI + '/sleeps/@me/snapshot';
  var options = opts || {};

  request.get(path, options, function(err, res, body){
    if (err) {
      logError('request');
      return callback(err);
    }

    if (!err && res.statusCode == 200) {
      body = JSON.parse(body);

      if (body.error) {
        logError('sleepDetail');
        err = new Error(body.error);
        return callback(err);
      }

      return callback(null, body);
    }
  });
};

// METHOD: GET
// URL: /users/@me/workouts
// INPUT PARAMS
//   start_time=1322380800 (epoch)
//   end_time=1322442000 (epoch)
//   limit=100
//   _token=<your auth token>

UpClient.prototype.workoutSummary = function(opts, callback) {
  var self = this;
  var path = API_URI + '/users/@me/workouts';
  var options = opts || {};

  request.get(path, options, function(err, res, body){
    if (err) {
      logError('request');
      return callback(err);
    }

    if (!err && res.statusCode == 200) {
      body = JSON.parse(body);

      if (body.error) {
        logError('workoutSummary');
        err = new Error(body.error);
        return callback(err);
      }

      return callback(null, body);
    }
  });
};

// METHOD: GET
// URL: /workouts/@me/snapshot
// INPUT PARAMS
//   _token=<your auth token>

UpClient.prototype.workoutDetail = function(opts, callback) {
  var self = this;
  var path = API_URI + '/workouts/@me/snapshot';
  var options = opts || {};

  request.get(path, options, function(err, res, body){
    if (err) {
      logError('request');
      return callback(err);
    }

    if (!err && res.statusCode == 200) {
      body = JSON.parse(body);

      if (body.error) {
        logError('workoutDetail');
        err = new Error(body.error);
        return callback(err);
      }

      return callback(null, body);
    }
  });
};