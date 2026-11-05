const http = require('http');

const server = http.createServer((req, res) => {
    //Objek Literal
    const data = {
        nama : 'Ahmad Fauzan',
        kelas : 'TI25A',
        matakuliah : 'Pemograman java script'
    };
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end(JSON.stringify(data));

});

server.listen(8000, () => {
    console.log('Server berjalan di http://localhost:8000')
});