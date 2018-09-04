var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  console.log('hit')
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
    console.log('users',users[0].username)
  });
});

module.exports = router;
