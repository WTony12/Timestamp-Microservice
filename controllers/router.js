module.exports = function(app){
    //Route to root which renders index.html
    app.get("/:time", function(req, res){
        res.status(200).json({time: req.params.time});
    });
    //Send 404 Message incase of wrong route
    app.use(function(req, res, next){
        res.status(404).send("404 Page Not Found");
        next();
    });
};
