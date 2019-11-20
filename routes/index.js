const express = require('express'),
    dashboard = require('./dashboard'),
    home = require('./home'),    
    router = express.Router(),
    app = express(),
    expressVue = require("express-vue");

app.use("/", router);
router.use('/', home);
router.use('/dashboard', dashboard);

module.exports = router;