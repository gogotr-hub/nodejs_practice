"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(function (req, res) {
    res.writeHead(302, { 'Location': 'http://www.naver.com' });
    res.end();
}).listen(3030, function () {
    console.log('Server Running');
});
