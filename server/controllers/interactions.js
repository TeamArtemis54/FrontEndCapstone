var models = require('../models');
// middleware
const bodyParser = require('body-parser');
// CONTROLLER:

module.exports = {
  postInteraction: function(req, res) {
    console.log(req.body);
    let params = req.body;
    models.interactions.postInteraction(params, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }
};