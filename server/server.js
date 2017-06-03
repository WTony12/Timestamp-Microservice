module.exports = function(app, port){
        //Starts server at given port
        app.listen(port, function(){
            console.log("Server is listening at port: " + port);
        });
};
