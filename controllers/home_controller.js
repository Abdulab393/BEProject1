module.exports.home=function(req,res){
    return res.end('<h1>Server is up for Codeial!</h1>');
}
// Another controllers
module.exports.profile=function(req,res){
    return res.end('<h1>Another controller is up for codeial,OP Ab!/h1>');
}