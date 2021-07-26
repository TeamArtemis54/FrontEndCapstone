var models = require('../models');
// middleware
const bodyParser = require('body-parser');
// CONTROLLER:

module.exports = {
  postInteraction: function(req, res) {
    // console.log(req.body);
    // req.body is undefined even when i'm submitting via postman!! fix


    models.interactions.postInteraction((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }
};