var express = require('express');
var inscriptionConfig = require('../JS/test_JS/inscrit/inscriptionconfig');

var inscriptionRoutes = function(app)
{
    var router = express.Router();

router.route('/inscription')
    .post(inscriptionconfig.create);

return router;

}

module.exports = inscriptionRoutes;