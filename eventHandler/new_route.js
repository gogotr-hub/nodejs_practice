"use strict";
process.on('exit', function () {
    console.log('exit programs');
});
process.on('uncaughtException', function () {
    console.log('error 발생');
});
var count = 0;
var test = function () {
    count = count + 1;
    if (count > 3)
        return;
    setTimeout(function () {
        test;
    }, 20000);
};
setTimeout(function () {
    test;
}, 2000);
