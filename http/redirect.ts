import http from 'http'

const server = http.createServer(function(req,res){
    res.writeHead(302, {'Location' : 'http://www.naver.com'});
    //res.writeHead(404); 404 페이지로 이동
    res.end();
}).listen(3030, ()=>{
    console.log('Server Running');
});
