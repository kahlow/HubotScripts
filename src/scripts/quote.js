(function(){
   
    var list = [];

    var Quotes = {
        Add: function(quote){
            list.push(quote);
        },
        List: function(){
            return list;
        },
        Delete: function(num){

        },
        Get: function(num){

        },
        Random: function(){
            return list[Math.floor(Math.random() * list.length)];
        },
    };

    module.exports = function(robot){
        robot.respond(/add quote (.*)/i, function(msg){
            Quotes.Add(msg.match[1]);
            return msg.send("Quote added: " + msg.match[1]);
        });
        robot.respond(/list quotes/i, function(msg){
            return msg.send(Quotes.List());
        });
        robot.respond(/get quote (.*)/i, function(msg){
            return msg.send(Quotes.Get(msg.match[1]));
        });
        robot.respond(/delete quote (.*)/i, function(msg){
            return msg.send(Quotes.Delete(msg.match[1]));
        });
        robot.respond(/(rand|random) quote/i, function(msg){
            return msg.send(Quotes.Random());
        });
    };
}).call(this);
