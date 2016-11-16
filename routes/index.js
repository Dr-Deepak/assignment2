var express = require('express');
var router = express.Router();
var busInfo = ["ABC Accounting","111-111-1111","1 abc st, Maple ON L6Y 4A2","cs@abcacounting.com","",""];
var pages = ["home","about","clients","services","register"];
var Customer = require('../models/customers');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',
                         busName:busInfo[0],
                         busPh:busInfo[1],
                        //  busAdd:busInfo[2],
                         busEmail:busInfo[3],
                         busfb:busInfo[4],
                         bustw:busInfo[5],
                         pages:pages

                      });
});
// Loads Registeration form
router.get('/register', function(req, res, next) {
  res.render("register", { title: 'Register',
                         busName:busInfo[0],
                         busPh:busInfo[1],
                        //  busAdd:busInfo[2],
                         busEmail:busInfo[3],
                         busfb:busInfo[4],
                         bustw:busInfo[5],
                         pages:pages

                      });
});

// \Processes input form register form
router.post('/register', function(req, res, next) {
  // create a new customer
  Customer.register(new customers(
                                    { firstname: req.body.firstname },
                                    { lastname: req.body.lastname },
                                    { username: req.body.username }), req.body.password,
      function(err, account) {
        if (err) {
          console.log(err);
          res.redirect('/error');
        }
        else {
          res.redirect('/login', { user: req.user });
        }
      }
  );
});
module.exports = router;
