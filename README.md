# node-up

A node.js API wrapper for the undocumented Jawbone UP API.

Based on Eric Blue's most-excellent work, found here: http://eric-blue.com/projects/up-api/

##Usage
###Setup
```js
var Up = require('up');

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
It's a good idea to make the auth request first and store the resulting token in your app for subsequent requests.

###Calling the Endpoints
The only required parameter for each endpoint is the token.

```js
client.feedSummary({_token: token}, function(err, res) {
	console.log(res);
});
```

Some endpoints accept further parameters, which are documented before each method in `/lib/Up.js`, as well as in [Eric's API docs](http://eric-blue.com/projects/up-api/).

##Installation
```
npm install up
```

##Run Tests
``` bash
  $ npm test
```
