"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var util_1 = __importDefault(require("util"));
var app = express_1.default();
app.get('/', function (req, res) {
    var str = util_1.default.format('%d + %d = %d', 1, 2, 1 + 2);
    res.send('URL Info : ' + str);
});
app.listen(3000, function () {
    console.log("node start!");
});
