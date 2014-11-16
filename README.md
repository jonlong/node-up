### This library is deprecated. Check out [node-jawbone-up](https://github.com/ryanseys/node-jawbone-up), which supports v.1.1 of the official API.


# node-up

A node.js API wrapper for the undocumented Jawbone UP API.

Based on Eric Blue's most-excellent work, found here: http://eric-blue.com/projects/up-api/

![TravisCI Build Status](https://travis-ci.org/jonlong/node-up.png)

##Warning
This build is broken at the moment, as it appears Jawbone's API structure has changed significantly.  Am currently poking around the app to investigate the new endpoints, but in the meantime, consider this package unusable.  If you'd like to contribute, a copy of Charles and the UP app is all you need to get inspectin'!

##Note
This is not an API that is officially supported by Jawbone and shouldn't be considered for use in production applications. Please use this client at your own risk, and please be considerate when making requests!

##Usage
###Setup
```js
var Up = require('node-up');

var upClient = new Up({
  username: JAWBONE_USERNAME,
  password: JAWBONE_PASSWORD
});
```

###Authenticating
The UP API requires that an auth token is passed with each request.  To generate the token, call the `auth` method.

```js
upClient.auth(function(err, res){
  var token = res.token;
  console.log(token);
});
```
It's a good idea to make the auth request first and store the resulting token in your app for subsequent requests.  With that said, I'm not sure if this token expires at some point, so you should be aware of that possibility.

###Calling the Endpoints
The only required parameter for each endpoint is the token.

```js
upClient.feedSummary({_token: token}, function(err, res) {
	console.log(res);
});
```

Some endpoints accept further parameters, which are documented before each method in `/lib/Up.js`, as well as in [Eric's API docs](http://eric-blue.com/projects/up-api/).

##Installation
```
npm install node-up
```

##Run Tests
``` bash
  $ npm test
```
