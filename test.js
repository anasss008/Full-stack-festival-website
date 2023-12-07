const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/festival.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connecte a la db.');
});

db.all('SELECT * FROM festival', [], (err, rows) => {
  if (err) {
    console.error(err.message);
  }

  console.log(rows);
});

db.close()