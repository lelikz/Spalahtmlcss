'use strict'
function Date(year, month, date) {
    this.year = year;
    this.month = month;
    this.date = date;
}
Date.prototype.toString = function(){
    return this.year + '-' + this.month + '-' + this.date;
}
var a = new Date(11,22,2002);
console.log(a.toString());