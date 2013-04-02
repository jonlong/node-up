var request = require('request');
var errs = require('errs');
var qs = require('querystring');
var logError = require('./util/log-error');
var responseCodes = require('./util/response-codes');

// Constructor

var Client = exports.Client = function(options) {
  this.username = options.username;
  this.password = options.password;
  this.service = 'nudge';
  this.url = 'https://jawbone.com/nudge/api';
};

// Request method used for all API requests

Client.prototype.request = function(options, callback) {
  var self = this;

  if (typeof options === 'string') {
    options = { path: options };
  }

  // Accepts either options.fullPath or options.path
  // options.fullPath is meant for supplying a complete URL
  // options.path is meant to supply just the API resource URI

  options.uri = options.fullPath || this.url + options.path;
  options.method = options.method || 'GET';
  options.body = JSON.stringify(options.body);

  if (options.params) {
    options.uri += '?' + qs.stringify(options.params);
    delete options.params;
  }

  return request(options, function(err, res, body) {
    if (err) {
      logError('request');
      return callback(err);
    }

    var statusCode = res.statusCode.toString();
    var result;

    try {
      result = JSON.parse(body);
    }
    catch(e) {
      // Disregard errors
    }

    // Check to see if any failure codes are present

    if (Object.keys(responseCodes.failure).indexOf(statusCode) !== -1) {
      var failure = errs.create({
        message: 'Jawbone Error ' + statusCode + ': ' + responseCodes.failure[statusCode],
        result: result,
        status: statusCode
      });

      console.log(failure);
      return callback(failure);
    }

    callback(null, result);
  });
};


Client.prototype.auth = function(callback) {
  var self = this;
  var form = {email: self.username, pwd: self.password, service: self.service};
  var options = {
    method: 'POST',
    form: form,
    fullPath: 'https://jawbone.com/user/signin/login'
  };

  return this.request(options, function(err, result){
    if (err) {
      callback(err);
    }

    if (result.token){
      // Set the authentication token
      self.token = result.token;
    }

    callback(null, result);
  });
};

// INPUT PARAMS
//   after=null
//   limit=30
//   _token=<your auth token>

Client.prototype.feedSummary = function(params, callback) {
  var options = {
    path: '/users/@me/social',
    params: params
  };

  return this.request(options, function(err, result){
    if (err) {
      callback(err);
    }

    callback(null, result);
  });
};

// INPUT PARAMS
//   date=2011-11-27
//   timezone=-28800
//   move_goal=0
//   sleep_goal=0
//   eat_goal=0
//   check_levels=1
//   _token=<your auth token>

Client.prototype.dailySummary = function(params, callback) {
  var options = {
    path: '/users/@me/healthCredits',
    params: params
  };

  return this.request(options, function(err, result){
    if (err) {
      callback(err);
    }

    callback(null, result);
  });
};

// INPUT PARAMS
//   start_time=1322380800 (epoch)
//   end_time=1322442000 (epoch)
//   _token=<your auth token>

Client.prototype.activityDetail = function(params, callback) {
  var options = {
    path: '/users/@me/band',
    params: params
  };

  return this.request(options, function(err, result){
    if (err) {
      callback(err);
    }

    callback(null, result);
  });
};

// INPUT PARAMS
//   start_time=1322380800 (epoch)
//   end_time=1322442000 (epoch)
//   limit=100
//   _token=<your auth token>

Client.prototype.sleepSummary = function(params, callback) {
  var options = {
    path: '/users/@me/sleeps',
    params: params
  };

  return this.request(options, function(err, result){
    if (err) {
      callback(err);
    }

    callback(null, result);
  });
};

// INPUT PARAMS
//   _token=<your auth token>
//   sleep_id=<sleep id>

Client.prototype.sleepDetail = function(params, callback) {
  var options = {
    path: '/sleeps/' + (params.sleep_id || '-QXJrBASWvo') + '/snapshot',
    params: params
  };

  return this.request(options, function(err, result){
    if (err) {
      callback(err);
    }

    callback(null, result);
  });
};

// INPUT PARAMS
//   start_time=1322380800 (epoch)
//   end_time=1322442000 (epoch)
//   limit=100
//   _token=<your auth token>

Client.prototype.workoutSummary = function(params, callback) {
  var options = {
    path: '/users/@me/workouts',
    params: params
  };

  return this.request(options, function(err, result){
    if (err) {
      callback(err);
    }

    callback(null, result);
  });
};

// INPUT PARAMS
//   _token=<your auth token>

Client.prototype.workoutDetail = function(params, callback) {
var options = {
    path: '/workouts/2xK2B_mW6Vs/snapshot',
    params: params
  };

  return this.request(options, function(err, result){
    if (err) {
      callback(err);
    }

    callback(null, result);
  });
};
