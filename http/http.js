"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'test/html',
        'Set-Cookie': ['breakfast = toast', 'dinner = stake']
    });
    res.write('hello world');
});
//클라이언트가 요청할때 발생되는 이벤트
server.on('request', function () {
    console.log('request on');
});
//클라이언트가 접속할때 발생하는 이벤트
server.on('connection', function () {
    console.log('connection on');
});
//서버가 종료될때 발생하는 이벤트
server.on('close', function () {
    console.log('close on');
});
//3030 포트로 서버를 엽니다.
server.listen(3030, function () {
    console.log('server Running localhost:3030');
});
