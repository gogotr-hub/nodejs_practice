import http from 'http';

const server = http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type':'text/html',
        'Set-Cookie':['breakfast = toast','dinner = pasta']
    });
}).listen(3030, ()=>{
    console.log('Server Running');
});