var express = require('express');
var router = express.Router();
var busInfo = ["ABC Accounting","111-111-1111","1 abc st, Maple ON L6Y 4A2","cs@abcacounting.com"];
var pages = ["home","about","clients","services"];
var Customer = require('../models/customers');
var passport = require('passport');

/**** GET Requests of all views  ***/
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Home',
	busName:busInfo[0],
	busPh:busInfo[1],
	//  busAdd:busInfo[2],
	busEmail:busInfo[3],
	busfb:busInfo[4],
	bustw:busInfo[5],
	user: req.user,
	pages:pages

});
});
// Loads About Page
router.get('/about', function(req, res, next) {
	res.render("about", { title: 'about',
	busName:busInfo[0],
	busPh:busInfo[1],
	//  busAdd:busInfo[2],
	busEmail:busInfo[3],
	busfb:busInfo[4],
	bustw:busInfo[5],
	user: req.user,
	pages:pages

});
});
// Loads Clients Page
router.get('/clients', function(req, res, next) {
	res.render("clients", { title: 'clients',
	busName:busInfo[0],
	busPh:busInfo[1],
	//  busAdd:busInfo[2],
	busEmail:busInfo[3],
	busfb:busInfo[4],
	bustw:busInfo[5],
	user: req.user,
	pages:pages

});
});
// Loads services Page
router.get('/services', function(req, res, next) {
	res.render("services", { title: 'services',
	busName:busInfo[0],
	busPh:busInfo[1],
	//  busAdd:busInfo[2],
	busEmail:busInfo[3],
	busfb:busInfo[4],
	bustw:busInfo[5],
	user: req.user,
	pages:pages

});
});
// Loads Registeration form
router.get('/register', function(req, res, next) {
	var messages = req.session.messages || []; //flash.message;

  // clear the session messages
  req.session.messages = [];

	res.render("register", { title: 'Register',
	busName:busInfo[0],
	busPh:busInfo[1],
	//  busAdd:busInfo[2],
	busEmail:busInfo[3],
	busfb:busInfo[4],
	bustw:busInfo[5],
	message:messages,
	user: req.user,
	pages:pages
});
});
// Loads services Page
router.get('/login', function(req, res, next) {
var messages = req.session.messages || []; //flash.message;

	// clear the session messages
	req.session.messages = [];

	res.render("login", { title: 'login',
	busName:busInfo[0],
	busPh:busInfo[1],
	//  busAdd:busInfo[2],
	busEmail:busInfo[3],
	busfb:busInfo[4],
	bustw:busInfo[5],
	message:this.messages,
	pages:pages,
	user: req.user
});
});
/***Get /facebook-show fb login popup***/
router.get('/facebook',passport.authenticate('facebook'), function(req, res, next){});

// code for 3rd party logins
router.get('/facebook/callback',passport.authenticate('facebook', {
	failureRedirect:'/login',
	failureMessage:'Invalid Login'
}),  function(req, res,next){
	res.redirect('/');
});
/* GET logout */
router.get('/logout', function(req, res, next) {
	// log the user out and redirect
  req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
  	res.redirect('/login');
  }
});
});

/* Error page*/
router.get('/error', function(req, res, next) {
	// log the user out and redirect

	res.render("error", { title:'Error'});
});



/*** POST Requests of all views *****/
/* POST login */
router.post('/login',
passport.authenticate('local',
{
	successRedirect: '/',
	failureRedirect: '/login',
	failureMessage: 'Invalid Login',
	failureFlash: true
}
), function(req, res, next) {
	res.redirect('/index');
}
);
/* POST register form submission  Processes input form register form */
router.post('/register', function(req, res, next) {
	// create a new account
	Customer.findOne({username: req.body.username},function(err,user) {
		if(err){
			console.log(err);
		}
		else if (user != null){
      req.session.messages='Already registered, please Login';
			console.log(user);
			res.redirect('/register');
		}	else if(user== null){// user do not exists in our db
			Customer.register(new Customer({ firstname: req.body.firstname,
                              					lastname: req.body.lastname,
                              					sin: req.body.sin,
                              					username: req.body.username,
                              					createdon: Date.now()
                              			}),	req.body.password,
			function(err, customer){
				if (err) {
					console.log(err+'*****'+customer);
					res.redirect('/error');
				}
				else{
					res.redirect('/login');
				}
			}
		);
	}
}
);
});
module.exports = router;
