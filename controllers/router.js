const checkIfDate = require('./checkIfDate');

module.exports = function(app){
    //Execute checkIfDate module and return JSON if true
    app.get("/:time", function(req, res){
        if (checkIfDate(req.params.time) === false)
        {
            res.send("Incorrect date");
        }
        else
            res.status(200).json(checkIfDate(req.params.time));
    });
    //Send 404 Message incase of wrong route
    app.use(function(req, res, next){
        res.status(404).send("404 Page Not Found");
        next();
    });
};
