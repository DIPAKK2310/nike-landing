import http, {IncomingMessage, ServerResponse} from 'http';

const PORT: number = Number(process.env.PORT) || 5000;


const server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.write('Hello from Backend');
    res.end();
    
})

server.listen(PORT,()=>{
    console.log(`servers is running on http://localhost:${PORT}`)
})




