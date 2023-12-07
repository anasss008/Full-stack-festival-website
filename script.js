const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/festival.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the festival database.');
});


// // Create the festival_sponsor table
// db.serialize(() => {
//   db.run(`
//     CREATE TABLE festival_sponsor (
//       id_festival INTEGER,
//       id_sponsor INTEGER,
//       PRIMARY KEY (id_festival, id_sponsor)
//     )
//   `);
// });

// // Insert all the rows into the table
// const data = [
//   [1, 15],
//   [1, 10],
//   [1, 3],
//   [1, 5],
//   [1, 1],
//   [2, 2],
//   [2, 10],
//   [2, 9],
//   [2, 4],
//   [2, 11],
//   [3, 13],
//   [3, 4],
//   [3, 6],
//   [3, 15],
//   [3, 1],
//   [4, 1],
//   [4, 15],
//   [4, 9],
//   [4, 13],
//   [4, 12],
//   [5, 4],
//   [5, 3],
//   [5, 8],
//   [5, 15],
//   [5, 1],
//   [6, 13],
//   [6, 9],
//   [6, 3],
//   [6, 5],
//   [6, 2],
//   [7, 7],
//   [7, 10],
//   [7, 3],
//   [7, 13],
//   [7, 8],
//   [8, 13],
//   [8, 3],
//   [8, 14],
//   [8, 11],
//   [8, 2],
//   [9, 2],
//   [9, 10],
//   [9, 12],
//   [9, 3],
//   [9, 7],
//   [10, 11],
//   [10, 5],
//   [10, 15],
//   [10, 1],
//   [10, 8],
//   [11, 8],
//   [11, 12],
//   [11, 15],
//   [11, 2],
//   [11, 11],
//   [12, 11],
//   [12, 2],
//   [12, 8],
//   [12, 1],
//   [12, 5],
//   [13, 14],
//   [13, 13],
//   [13, 11],
//   [13, 3],
//   [13, 9],
//   [14, 13],
//   [14, 12],
//   [14, 9],
//   [14, 2],
//   [14, 3],
//   [15, 15],
//   [15, 14],
//   [15, 2],
//   [15, 3],
//   [15, 6],
//   [16, 8],
//   [16, 4],
//   [16, 3],
//   [16, 11],
//   [16, 14],
//   [17, 7],
//   [17, 4],
//   [17, 10],
//   [17, 12],
//   [17, 14],
//   [18, 9],
//   [18, 4],
//   [18, 1],
//   [18, 3],
//   [18, 2],
// ];

// const insertStmt = db.prepare('INSERT INTO festival_sponsor (id_festival, id_sponsor) VALUES (?, ?)');
// data.forEach(([id_festival, id_sponsor]) => {
//   insertStmt.run(id_festival, id_sponsor);
// });

// insertStmt.finalize();

// // Close the database connection
// db.close();



// Query all table names
db.all("SELECT * FROM ticket", [], (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }


  console.log(rows);
});

// Close the database connection
db.close();



db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});