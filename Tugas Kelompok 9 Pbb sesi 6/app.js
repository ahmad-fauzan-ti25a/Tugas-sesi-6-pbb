const express = require('express');
const app = express();
const PORT = 3000;

const serverStartTime = new Date().toLocaleString('id-ID', {
  dateStyle: 'full',
  timeStyle: 'medium'
});


app.get('/', (req, res) => {
  res.send('<h1>Selamat datang di server Kelompok 9</h1>');
});


app.get('/info', (req, res) => {
  res.send(`Server ini mulai dijalankan pada: <strong>${serverStartTime}</strong>`);
});


app.get('/anggota', (req, res) => {
  const dataAnggota = [
    { nama: 'Ahmad Fauzan', nim: '20250040089' },
    { nama: 'Zacky Alif', nim: '20250040159' },
    { nama: 'Jihad', nim: '20200040050' },
    { nama: 'Victorius', nim: '20250041000' },    

  ];
  res.json(dataAnggota);
});

app.listen(PORT, () => {
  console.log(`Server Kelompok 9 berhasil berjalan di http://localhost:${PORT}`);
});