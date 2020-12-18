import http from 'http';

const server = http.createServer(function(req, res){
    res.writeHead(200,{
        'Content-Type':'test/html',
        'Set-Cookie':['breakfast = toast', 'dinner = stake']
    });
});

//클라이언트가 요청할때 발생되는 이벤트
server.on('request',()=>{
    console.log('request on');
});

//클라이언트가 접속할때 발생하는 이벤트
server.on('connection',()=>{
    console.log('connection on');
});

//서버가 종료될때 발생하는 이벤트
server.on('close',()=>{
    console.log('close on');
});

//3030 포트로 서버를 엽니다.
server.listen(3030,()=>{
    console.log('server Running localhost:3030')
});


