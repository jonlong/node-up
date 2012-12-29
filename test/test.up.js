var Up = require('./../lib/Up').Client;
var should = require('should');
var request = require('request');
var helpers = require('./helpers');
var client = helpers.createClient();
var token;

describe('Up', function() {

  // Grab an auth token to make all the API calls before testing
  before(function(done){
    client.auth(function(err, res){
      if (err) throw err;

      token = res.token;
      done();
    });
  });

  describe('auth', function() {
    it('exists as a method in the client', function() {
      client.auth.should.be.a('function');
    });

    it('returns and sets a token on successful login', function(done) {
      client.auth(function(err, res){
        if (err) throw err;

        should.exist(res);

        // verify user object
        res.should.have.property('user');
       
        // verify token is returned
        res.should.have.property('token');
       
        // verify token is set in Client
        client.should.have.property('token');
       
        done();
      });
    });
  });

  describe('feedSummary', function() {

    it('exists as a method in the client', function() {
      client.feedSummary.should.be.a('function');
    });

    it('returns a feed summary object', function(done) {
      client.feedSummary({_token: token}, function(err, res) {
        if (err) throw err;

        should.exist(res);

        // verify data object
        res.should.have.property('data');

        // verify feed object
        res.data.should.have.property('feed');

        done();
      });
    });
  });

  describe('dailySummary', function() {

  it('exists as a method in the client', function() {
      client.dailySummary.should.be.a('function');
    });

    it('returns a daily summary object', function(done) {
      client.dailySummary({_token: token}, function(err, res) {
        if (err) throw err;

        // verify data object
        res.should.have.property('data');

        done();
      });
    });
    
  });

  describe('activityDetail', function() {

  it('exists as a method in the client', function() {
      client.activityDetail.should.be.a('function');
    });

    it('returns an activity detail object', function(done) {
      client.activityDetail({_token: token}, function(err, res) {
        if (err) throw err;

        // verify data object
        res.should.have.property('data');

        done();
      });
    });

  });

  describe('sleepSummary', function() {

    it('exists as a method in the client', function() {
      client.sleepSummary.should.be.a('function');
    });

    it('returns a sleep summary object', function(done) {
      client.sleepSummary({_token: token}, function(err, res) {
        if (err) throw err;

        // verify data object
        res.should.have.property('data');

        done();
      });
    });
  });

  describe('sleepDetail', function() {

    it('exists as a method in the client', function() {
      client.sleepDetail.should.be.a('function');
    });

    it('returns a sleep detail object', function(done) {
      client.sleepDetail({_token: token}, function(err, res) {
        if (err) throw err;

        // verify data object
        res.should.have.property('data');

        done();
      });
    });

  });

  describe('workoutSummary', function() {

    it('exists as a method in the client', function() {
      client.workoutSummary.should.be.a('function');
    });

    it('returns a workout summary object', function(done) {
      client.workoutSummary({_token: token}, function(err, res) {
        if (err) throw err;

        // verify data object
        res.should.have.property('data');

        done();
      });
    });
    
  });

  describe('workoutDetail', function() {
    
    it('exists as a method in the client', function() {
      client.workoutDetail.should.be.a('function');
    });

    it('returns a workout detail object', function(done) {
      client.workoutDetail({_token: token}, function(err, res) {
        if (err) throw err;

        // verify data object
        res.should.have.property('data');

        done();
      });
    });

  });

});