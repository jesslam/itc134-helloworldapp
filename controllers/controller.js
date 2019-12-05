const data = require('../models/data.js');

exports.test = function (req, res){
    res.send('Test controller running...');

exports.greeting = function (req, res) {
    Database.findById(req.params.id, function(err, data){
        if (err) return next(err);
        res.send(data);
    });
}
};