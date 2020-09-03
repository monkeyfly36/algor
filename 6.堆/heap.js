Function.prototype.currying = function() {
    var that = this;
    return function() {
        console.log(arguments)
        return Function.prototype.call.apply(that, arguments);
    }
}

var a = function(){}
a.currying(1)(2)
