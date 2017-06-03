module.exports = function(app){
    //Route to root which renders index.html
    app.get("/", function(err, req, res){
        if(err)
            console.error(err);
        else
            res.status(200).sendFile(__dirname + "/public/index.html");
    });
    //Send 404 Message incase of wrong route
    app.use(function(req, res, next){
        res.status(404).send("404 Page Not Found");
        next();
    });
};
