if(process.env.DEPLOYED) {
	module.exports = {
	 'facebookAuth' : {
	   'clientID'      : 1677657699169186, // your App ID
	   'clientSecret'  : '95b9cf6f8f9739bec2dfe5c275c61719', // your App Secret
	   'callbackURL'   : 'https://socialflixplayer.herokuapp.com/auth/facebook/callback'
	 }
	};
} else {
	module.exports = {
	  'facebookAuth' : {
	    'clientID'      : 1677657699169186, // your App ID
	    'clientSecret'  : '95b9cf6f8f9739bec2dfe5c275c61719', // your App Secret
	    'callbackURL'   : 'http://localhost:4000/auth/facebook/callback'
	  }
	};
}




