const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/environment');
const passport = require('passport');

// ORCID Login Route
router.get('/orcid/login', passport.authenticate('orcid'));

// ORCID Callback Route
router.get('/orcid/callback', 
  passport.authenticate('orcid', { failureRedirect: '/login', session: false}),
  function(req, res) {
    console.log('ORCID callback', req.user);
    const user = req.user;
    tokenExpirationSeconds = 10 *60 // 10 minutes

    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: tokenExpirationSeconds });
    res.cookie('jwt', token, { httpOnly: true, secure: true, sameSite: 'Strict', maxAge: tokenExpirationSeconds * 1000}); 

    userAlias = user.name.split(' ')[0]+' '+user.name.split(' ').slice(1).map(n=>n[0]+'.').join(' ')
    const userData = { alias: userAlias, _id: user._id.toString() };
    res.cookie('userData', JSON.stringify(userData), { httpOnly: false, secure: true, sameSite: 'Strict', maxAge: tokenExpirationSeconds * 1000 });

    res.redirect('/');
  }
);

module.exports = router;
