const http = require('http');
const port = 8000;

const server = http.createServer((req, res) =>{
    const dataMahasiswa = {
        nama : 'Ahmad Fauzan',
        kelas : 'TI25A',
        matakuliah : 'Pemograman java script'  
    };
    
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>Anda berada di halaman utama BRAY</h2></body></html>');
    }
    else if (req.url === '/mahasiswa'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(dataMahasiswa));
    }
    else if (req.url === '/dosen'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>Anda berada di halaman dosen</h2></body></html>');
    }
    else if (req.url === '/admin'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>Anda berada di halaman admin</h2></body></html>');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>Page not found (400)</h2></body></html>');
    }
    res.end();
});
server.listen(port,()=>{
    console.log('Server is listening on port ${port}');
});