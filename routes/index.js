var express = require('express');
var router = express.Router();
var busInfo = ["ABC Accounting","111-111-1111","1 abc st, Maple ON L6Y 4A2","cs@abcacounting.com","",];
var pages = ["Home","About","Contact","Clients","Services"];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',
                         busName:busInfo[0],
                         busPh:busInfo[1],
                         busAdd:busInfo[2],
                         busEmail:busInfo[3],
                         busfb:busInfo[4],
                         bustw:busInfo[5],
                         pages:pages

                      });
});

module.exports = router;
