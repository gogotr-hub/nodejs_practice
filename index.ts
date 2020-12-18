import express from 'express';
import util from 'util';

const app = express();

app.get('/', (req, res)=>{
    var str = util.format('%d + %d = %d', 1,2,1+2);
    res.send('URL Info : '+ str );
});

app.listen(3000, function(){
    console.log("node start!")
});