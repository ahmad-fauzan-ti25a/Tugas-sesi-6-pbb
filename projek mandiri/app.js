const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.end('Hello Express! Server berjalan');

});

app.get('/data', (req, res)=>{
    res.json({nama: 'Mahasiswa', kampus: "NUSPUT", matkul: "PBB" });
});

app.listen(8000, ()=> console.log('Server Express berjalan di http://localhost:8000'));