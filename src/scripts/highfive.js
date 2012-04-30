module.exports = function(robot){
    // ha ha "hfives"
    var hfives = ["*SLAP* Excellent!", "*POW* Nice one!", "I'm not feeling up to it."];
    
    return robot.respond(/.*(high five)|(high-five)/, function(msg){
        msg.send(hfives[Math.floor(Math.random() * 3)]);                
    });       
};
