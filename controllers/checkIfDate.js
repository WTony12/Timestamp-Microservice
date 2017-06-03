const moment = require('moment');

module.exports = function(str){
    if(moment(str).isValid())
    {
        return {"Unix": moment(str).format("X"), "Natural": moment(str).format("MMMM D, YYYY")};
    }
    else if(moment(+str).isValid())
    {
        return {"Unix": moment(+str).format("X"), "Natural": moment(+str).format("MMMM D, YYYY")};
    }
    else
        return false;
};
