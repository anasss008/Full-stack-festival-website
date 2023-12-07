const express = require('express');
const sqlite3 = require('sqlite3').verbose();


//creation du repertoire ./db
const fs = require('fs');
const directory = './db';

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}


let db = new sqlite3.Database('./db/festival.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the festival database.');
});

// //*********************************************//
// //creation base de donnée (le script va etre executer une seule fois)



// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });


// //creation des tables:


// let db = new sqlite3.Database('./db/festival.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the festival database.');
// });

// db.serialize(() => {
//   // Create festival table
//   db.run(`CREATE TABLE festival(
//     id_festival INTEGER PRIMARY KEY AUTOINCREMENT,
//     id_scene INTEGER,
//     nom_festival TEXT,
//     description TEXT,
//     prix_ticket TEXT,
//     image_festival TEXT,
//     date DATE,
//     FOREIGN KEY(id_scene) REFERENCES scene(id_scene)
//   )`);

//   // Create scene table
//   db.run(`CREATE TABLE scene(
//     id_scene INTEGER PRIMARY KEY AUTOINCREMENT,
//     nom_scene TEXT,
//     capacite INTEGER,
//     adresse TEXT
//   )`);

//   // Create media table
//   db.run(`CREATE TABLE media(
//     id_media INTEGER PRIMARY KEY AUTOINCREMENT,
//     nom_media TEXT,
//     logo_media TEXT
//   )`);

//   // Create artiste table
//   db.run(`CREATE TABLE artiste(
//     id_artiste INTEGER PRIMARY KEY AUTOINCREMENT,
//     id_festival INTEGER,
//     nom_artiste TEXT,
//     genre_musique TEXT,
//     FOREIGN KEY(id_festival) REFERENCES festival(id_festival)
//   )`);

//   // Create sponsor table
//   db.run(`CREATE TABLE sponsor(
//     id_sponsor INTEGER PRIMARY KEY AUTOINCREMENT,
//     nom_sponsor TEXT,
//     logo_sponsor TEXT
//   )`);
// });

// verification de la base de donnee

// db.serialize(() => {
//   db.each("SELECT name FROM sqlite_master WHERE type='table'", (err, table) => {
//     console.log(table.name);
//   });
// });

// // ************************************
// // Insertion dans la table festival


// db.serialize(() => {
//   const rows = [
//     [1, 1, 'Festival Mawazine des Rythmes du Monde', 'Ce festival annuel met en avant une diversité de genres musicaux internationaux, allant du pop et du rock à la musique traditionnelle et aux rythmes du monde.', 1600, 'https://gcdn.imgix.net/articles/RCUt76W5ECd1z2D6Z6zuLzqrxfsHZzGF1hNaeylg.png', '2023-06-27'],
//     [2, 3, 'Festival d\'Essaouira de la Musique Gnaoua et du Monde', 'Ce festival célèbre la musique Gnaoua, un style musical traditionnel marocain influencé par les rythmes africains. Il offre également une plateforme aux musiciens internationaux pour se produire aux côtés des artistes Gnaoua.', 700, 'https://gcdn.imgix.net/events/festival-gnaoua-et-musiques-du-monde-2023-soiree-borj-bab-pass-samedi.jpg', '2023-06-24'],
//     [3, 4, 'Festival de Fès de la Musique Sacrée du Monde', 'Ce festival met en avant la musique sacrée de différentes traditions religieuses et cultures du monde. Il offre un espace d\'échange et de dialogue interculturel à travers des concerts, des spectacles et des conférences.', 500, 'https://aujourdhui.ma/wp-content/uploads/2018/05/Festival-des-musiques-sacrees-du-monde.jpg?x92672', '2023-06-29'],
//     [4, 13, 'Festival Timitar, Agadir', 'Ce festival célèbre la musique Amazighe (berbère) et met en valeur les artistes et les groupes musicaux amazighs. Il offre une occasion de découvrir la diversité musicale des régions berbérophones du Maroc.', 900, 'https://www.maroc-hebdo.press.ma/files/2022/07/festival-timitar-22.jpg', '2023-07-01'],
//     [5, 6, 'Festival Atlas Electronic, Marrakech', 'Ce festival électronique se déroule dans un cadre unique à Marrakech. Il met en avant des DJs et des artistes de musique électronique, offrant une expérience musicale immersive dans un environnement inspirant.', 1000, 'https://www.ticket.ma/upload/events/1291/original_AE18_TICKET_MA_1_650.jpg', '2023-07-02'],
//     [6, 8, 'Festival Jazzablanca, Casablanca', 'Ce festival de jazz propose une programmation riche de musiciens de jazz nationaux et internationaux. Il offre des concerts dans différents lieux de Casablanca, mettant en avant la créativité et l\'expression musicale du jazz.', 1100, 'https://gcdn.imgix.net/events/jazzablanca-festival-pass-du-02-0307.jpg?w=900&h=600&fit=clip&auto=format,compress&q=80', '2023-07-03'],
//     [7, 14, 'Festival International de Musique Sacrée de Meknès', 'Ce festival met en avant la musique sacrée du monde entier dans la ville historique de Meknès. Il réunit des artistes et des ensembles musicaux représentant différentes traditions religieuses, offrant des performances uniques.', 1000, 'https://www.lodj.ma/photo/art/grande/65641308-46792160.jpg?v=1656179797', '2023-07-04'],
//     [8, 7, 'Festival Taragalte, Marrakesh', 'Ce festival se déroule dans le désert, près de M\'hamid El Ghizlane, et célèbre la musique et la culture sahariennes. Il propose des spectacles de musique nomade, du blues du désert et des danses traditionnelles.', 1300, 'https://gcdn.imgix.net/events/festival-taragalte-pack-stars.jpg', '2023-07-07'],
//     [9, 18, 'Festival des Andalousies Atlantiques d\'Essaouira', 'Ce festival met en valeur la musique andalouse, un héritage musical arabo-andalou au Maroc. Il propose des concerts et des spectacles de musique andalouse traditionnelle dans la belle ville d\'Essaouira.', 1400, 'https://aujourdhui.ma/wp-content/uploads/2021/12/Essaouira.jpg', '2023-07-09'],
//     [10, 9, 'Festival L’Boulevard, Casablanca', 'Ce festival met l\'accent sur les genres alternatifs tels que le rock, le métal et le hip-hop. Il offre une plateforme aux groupes de musique locaux et internationaux émergents pour se produire et promouvoir leur talent.', 1500, 'https://www.maroc-hebdo.press.ma/files/2022/09/boulevard-22.jpg', '2023-07-13'],
//     [11, 16, 'Festival Tanjazz, Tanger', 'Ce festival de jazz propose une programmation éclectique de musiciens de jazz, allant des sons classiques aux expressions contemporaines du jazz, dans la magnifique ville de Tanger.', 1600, 'https://www.ticket.ma/upload/events/2550/original_650x445px_Line_Up_Phase1_2_Ticket_ma.png', '2023-07-15'],
//     [12, 5, 'Festival de Fès de la culture soufie, Fès', 'Ce festival met en avant la culture soufie et la musique spirituelle dans la ville de Fès. Il propose des concerts de musique soufie, des rituels spirituels et des conférences sur la spiritualité.', 1700, 'https://www.hitradio.ma/sites/default/files/2022-09/Screen%20Shot%202022-09-27%20at%2010.20.53.png', '2023-07-17'],
//     [13, 15, 'Festival OASIS INTO THE WILD, Ouarzazate', 'Ce festival unique se déroule à Ouarzazate et combine la musique électronique avec des performances artistiques et des projections visuelles, créant une atmosphère immersive et captivante.', 1800, 'https://www.hitradio.ma/sites/default/files/2023-03/original_tma.png', '2023-07-19'],
//     [14, 12, 'Festival Alegria Chefchaouen', 'Ce festival propose une célébration de la musique et de la culture, avec des concerts, des performances artistiques et des événements culturels dans la ville de Chefchaouen.', 1900, 'https://aujourdhui.ma/wp-content/uploads/2017/08/Festival-Alegria-Chefchaouen.jpg', '2023-07-21'],
//     [15, 11, 'Festival International du rai d\'Oujda', 'Ce festival met en avant le rai, un genre musical populaire au Maroc et en Algérie. Il présente des artistes de renom du rai, offrant une expérience dynamique et festive.', 2000, 'https://aujourdhui.ma/wp-content/uploads/2018/07/Festival-du-rai-oujda.jpg', '2023-07-25'],
//     [16, 10, 'Dakhla Festival', 'Ce festival se déroule à Dakhla, dans le sud du Maroc, et met en avant la musique locale, notamment le patrimoine musical sahraoui et les sonorités du désert.', 1000, 'https://www.windmag.com/media/news/19/2-fevrier/12/f%C3%A9vrier-12/44da50c97a756f103834ab2fa3866e7c.jpg', '2023-07-27'],
//     [17, 2, 'H-KAYNE en Concert à Rabat', 'Ce concert met en vedette H-KAYNE, l\'un des groupes de rap marocains les plus populaires, offrant une performance énergique et entraînante.', 1900, 'https://gcdn.imgix.net/events/h-kayne-en-concert-a-rabat.jpg', '2023-07-30'],
//     [18, 17, 'Awake Fest, Marrakesh', 'Ce festival propose une expérience musicale et artistique immersive à Marrakech, avec une programmation variée de musiciens et d\'artistes locaux et internationaux.', 1200, 'https://www.hitradio.ma/sites/default/files/2022-07/awake-festival.png', '2023-08-02']
//   ];

//   const stmt = db.prepare(`
//     INSERT INTO festival (id_festival, id_scene, nom_festival, description, prix_ticket, image_festival, date)
//     VALUES (?, ?, ?, ?, ?, ?, ?)
//   `);

//   rows.forEach((row) => {
//     stmt.run(row);
//   });

//   stmt.finalize();
// });

// // afficher les lignes de la table festival
// db.serialize(() => {
//   db.each('SELECT * FROM festival', (err, row) => {
//     console.log(row);
//   });
// });


// // Insertion dans la table scene

// db.serialize(() => {
//   const rows = [
//     [1, 'Scène OLM Souissi', 120000, 'Avenue Imam Malik, Rabat'],
//     [2, 'Théâtre National Mohammed V', 1700, '172 Av. Al Mansour Addahbi, Rabat'],
//     [3, 'Bayt Dakira', 3500, 'Rue Ziry Ibn Atiyah, Essaouira'],
//     [4, 'palais de Bab Makina', 4700, 'R501, Fes, Morocco'],
//     [5, 'COMPLEXE CULTUREL DE FES', 1500, 'Rue d\'Espagne, Fes'],
//     [6, 'Théâtre Royal', 2700, 'Av. Hassan II, Marrakech'],
//     [7, 'Jardin Majorelle', 20000, 'Rue Yves St Laurent, Marrakech'],
//     [8, 'Scène Casa Anfa', 70000, 'Anfa Casablanca'],
//     [9, 'Scène BMCI', 65000, 'PLACE DES NATIONS UNIES Casablanca'],
//     [10, 'Palais Rhoul dakhla', 1250, 'boulevard MV Dakhla'],
//     [11, 'Place stade d\'honneur Oujda', 13500, 'M358+R6F, Oujda'],
//     [12, 'Palace Oued Menana', 5400, 'Avenue el mourabitin chefchaoune'],
//     [13, 'Salle Brahim Radi', 1200, 'Hôtel de Ville, Agadir'],
//     [14, 'Dar Lamaalam', 1100, 'Rue Ferhat Hachchad, Meknes'],
//     [15, 'Atlas Studios', 700, 'Km 7, Route de Marrakech, Ouarzazate'],
//     [16, 'Théâtre Cervantes', 1300, 'Avenue Pasteur, Tanger'],
//     [17, 'Palais Amani', 20000, '12 Derb el Miter, Mhamit, Marrakesh'],
//     [18, 'Théâtre de l\'Alliance Franco-Marocaine', 1500, 'Avenue Mohammed V, Essaouira']
//   ];

//   const stmt = db.prepare(`
//     INSERT INTO scene (id_scene, nom_scene, capacite, adresse)
//     VALUES (?, ?, ?, ?)
//   `);

//   rows.forEach((row) => {
//     stmt.run(row);
//   });

//   stmt.finalize();
// });

// // Retrieve and display the inserted rows
// db.serialize(() => {
//   db.each('SELECT * FROM scene', (err, row) => {
//     console.log(row);
//   });
// });


// // insertion dans la table artiste



// // Creation de la table artiste
// db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS artiste (
//       id_artiste INTEGER PRIMARY KEY AUTOINCREMENT,
//       id_festival INTEGER,
//       nom_artiste TEXT,
//       genre_musique TEXT,
//       FOREIGN KEY (id_festival) REFERENCES festival (id_festival)
//     )
//   `);
// });

// // Insertion dans la table artiste
// db.serialize(() => {
//   const rows = [
//     [1, 1, 'Fairuz', 'Alternative'],
//     [2, 1, 'Umm Kulthum', 'Rai'],
//     [3, 1, 'Kadim Al Sahir', 'Pop'],
//     [4, 2, 'Amr Diab', 'Electronic'],
//     [5, 2, 'Cheb Khaled', 'Reggae'],
//     [6, 2, 'Saber Rebaï', 'R&B'],
//     [7, 3, 'Oumou Sangaré', 'Blues'],
//     [8, 3, 'Salif Keita', 'Jazz'],
//     [9, 3, 'Youssou N\'Dour', 'Soul'],
//     [10, 4, 'Fela Kuti', 'Funk'],
//     [11, 4, 'Edith Piaf', 'Chanson'],
//     [12, 4, 'Charles Aznavour', 'Folk'],
//     [13, 5, 'Stromae', 'Dance'],
//     [14, 5, 'Céline Dion', 'Ballad'],
//     [15, 5, 'David Bowie', 'Rock'],
//     [16, 6, 'Queen', 'Pop Rock'],
//     [17, 6, 'Madonna', 'Pop'],
//     [18, 6, 'Michael Jackson', 'R&B'],
//     [19, 7, 'Beyoncé', 'Hip Hop'],
//     [20, 7, 'Elvis Presley', 'Rock\'n\'Roll'],
//     [21, 7, 'Mariah Carey', 'Soul'],
//     [22, 8, 'Bob Dylan', 'Folk Rock'],
//     [23, 8, 'Fairuz', 'Alternative'],
//     [24, 8, 'Umm Kulthum', 'Rai'],
//     [25, 9, 'Kadim Al Sahir', 'Pop'],
//     [26, 9, 'Amr Diab', 'Electronic'],
//     [27, 9, 'Cheb Khaled', 'Reggae'],
//     [28, 10, 'Saber Rebaï', 'R&B'],
//     [29, 10, 'Oumou Sangaré', 'Blues'],
//     [30, 10, 'Salif Keita', 'Jazz'],
//     [31, 11, 'Youssou N\'Dour', 'Soul'],
//     [32, 11, 'Fela Kuti', 'Funk'],
//     [33, 11, 'Edith Piaf', 'Chanson'],
//     [34, 12, 'Charles Aznavour', 'Folk'],
//     [35, 12, 'Stromae', 'Dance'],
//     [36, 12, 'Céline Dion', 'Ballad'],
//     [37, 13, 'David Bowie', 'Rock'],
//     [38, 13, 'Queen', 'Pop Rock'],
//     [39, 13, 'Madonna', 'Pop'],
//     [40, 14, 'Michael Jackson', 'R&B'],
//     [41, 14, 'Beyoncé', 'Hip Hop'],
//     [42, 14, 'Elvis Presley', 'Rock\'n\'Roll'],
//     [43, 15, 'Mariah Carey', 'Soul'],
//     [44, 15, 'Bob Dylan', 'Folk Rock'],
//     [45, 15, 'Fairuz', 'Folk Rock'],
//     [46, 16, 'Samira Said', 'Pop'],
//     [47, 16, 'Kadim Al Sahir', 'Pop'],
//     [48, 16, 'Amr Diab', 'Electronic'],
//     [49, 18, 'Cheb Khaled', 'Rai'],
//     [50, 18, 'Saber Rebai', 'R&B'],
//     [51, 18, 'Oumou Sangaré', 'Blues'],
//     [52, 17, 'H-kayn', 'Rap']
//   ];

//   const stmt = db.prepare(`
//     INSERT INTO artiste (id_artiste, id_festival, nom_artiste, genre_musique)
//     VALUES (?, ?, ?, ?)
//   `);

//   rows.forEach((row) => {
//     stmt.run(row);
//   });

//   stmt.finalize();
// });

// // afficher les lignes de la table artiste
// db.serialize(() => {
//   db.each('SELECT * FROM artiste', (err, row) => {
//     console.log(row);
//   });
// });

// // creation table media


// // Insertion des lignes de la table media
// db.serialize(() => {
//   const rows = [
//     [1, '2M TV', 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/ac/2M_Logo.svg/1200px-2M_Logo.svg.png'],
//     [2, 'SNRT', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo_SNRT.svg/1200px-Logo_SNRT.svg.png'],
//     [3, 'Medi 1 TV', 'https://www.lavieeco.com/wp-content/uploads/2019/03/Medi1-TV.jpg'],
//     [4, 'Radio Mars', 'https://play-lh.googleusercontent.com/PwRJZ-pcFvn4I0vB1YOz5osyBwmkCAM8x3xRxwZHbpmfvQkiWyXQNhgoiJhj6isugS4'],
//     [5, 'Le360', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Le360-actu-maroc.svg/1200px-Le360-actu-maroc.svg.png'],
//     [6, 'Hespress', 'https://i1.hespress.com/wp-content/uploads/2021/09/schema_publisher_logo.jpg'],
//     [7, 'TelQuel', 'https://chadatv.com/wp-content/uploads/2017/11/logo-press-telquel-ma.png'],
//     [8, 'Al Massae', 'https://maroc.mom-gmr.org/uploads/tx_lfrogmom/media/11-1120_import.jpg'],
//     [9, 'Le Matin', 'https://s1.lematin.ma/cdn/images/kit-media/logo-lematin-vert.png'],
//     [10, 'Le Soir Echos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Logo_du_journal_Le_Soir.svg/2560px-Logo_du_journal_Le_Soir.svg.png'],
//     [11, 'Les Inspirations Eco', 'https://i0.wp.com/leseco.ma/wp-content/uploads/2021/10/LesECO-LOGO.jpg?fit=1200%2C600&ssl=1'],
//     [12, 'Challenge.ma', 'https://pbs.twimg.com/profile_images/652395435282296832/i7kOazgU_400x400.jpg'],
//     [13, 'Chada', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzic5ojy34VzHWDjqmn_71TgpBeUdKZcaeM6slBttwMt8kijPvFH6WdJhyFKdPoM_EUZY&usqp=CAU'],
//     [14, 'Huffpost Maroc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/HuffPost.svg/2560px-HuffPost.svg.png'],
//     [15, 'Yabiladi', 'https://maroc.mom-gmr.org/uploads/tx_lfrogmom/media/yabiladi_01.jpg']
//   ];

//   const stmt = db.prepare(`
//     INSERT INTO media (id_media, nom_media, logo_media)
//     VALUES (?, ?, ?)
//   `);

//   rows.forEach((row) => {
//     stmt.run(row);
//   });

//   stmt.finalize();
// });

// // afficher les lignes de la table media
// db.serialize(() => {
//   db.each('SELECT * FROM media', (err, row) => {
//     console.log(row);
//   });
// });


// // insertion sponsor table

// // Insertion dans la table sponsor
// db.serialize(() => {
//   const rows = [
//     [1, 'Attijariwafa Bank', 'https://upload.wikimedia.org/wikipedia/en/4/49/ATTIJARIWAFA_BANK_LOGO.png'],
//     [2, 'Banque Populaire', 'https://www.groupebcp.com/fr/PublishingImages/GBP_Filiales/BAQNQUE-ATLANTIQUE.png'],
//     [3, 'BMCE Bank of Africa', 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Bmce_afric.png'],
//     [4, 'Crédit Agricole du Maroc', 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a6/Cr%C3%A9dit_Agricole.svg/1200px-Cr%C3%A9dit_Agricole.svg.png'],
//     [5, 'Société Générale Maroc', 'https://upload.wikimedia.org/wikipedia/fr/9/9b/Logo-societe-generale.png'],
//     [6, 'Bank Al-Maghrib', 'https://upload.wikimedia.org/wikipedia/fr/9/9f/Logo_Bank_Al-Maghrib.png'],
//     [7, 'ONCF', 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e5/Logo_ONCF.svg/2560px-Logo_ONCF.svg.png'],
//     [8, 'Royal Air Maroc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_Royal_Air_Maroc.svg/1024px-Logo_Royal_Air_Maroc.svg.png'],
//     [9, 'Maroc Telecom', 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/6e/Maroc_telecom_logo.svg/1200px-Maroc_telecom_logo.svg.png'],
//     [10, 'OCP', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/OCP_Group.svg/1200px-OCP_Group.svg.png'],
//     [11, 'CIH Bank', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cih-bank.png/800px-Cih-bank.png'],
//     [12, 'Addoha', 'https://seeklogo.com/images/A/addoha-logo-DD99E36CBB-seeklogo.com.png'],
//     [13, 'LafargeHolcim Maroc', 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/ac/Lafarge.svg/langfr-280px-Lafarge.svg.png'],
//     [14, 'Autoroutes du Maroc', 'https://upload.wikimedia.org/wikipedia/fr/6/63/ADM-maroc.jpg'],
//     [15, 'Lydec', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Logo_Lydec_2010.jpg']
//   ];

//   const stmt = db.prepare(`
//     INSERT INTO sponsor (id_sponsor, nom_sponsor, logo_sponsor)
//     VALUES (?, ?, ?)
//   `);

//   rows.forEach((row) => {
//     stmt.run(row);
//   });

//   stmt.finalize();
// });

// // afficher les lignes de la table sponsor
// db.serialize(() => {
//   db.each('SELECT * FROM sponsor', (err, row) => {
//     console.log(row);
//   });
// });

//creation de la table ticket par jointure des deux tables festival et scene


// db.serialize(() => {
//   db.run(`
//     CREATE TABLE ticket (
//         id_festival INTEGER PRIMARY KEY,
//         ticket_disponible INTEGER,
//         prix_ticket INTEGER
//     );
//   `, (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Ticket table created successfully.');
//   });

//   db.run(`
//     INSERT INTO ticket (id_festival, ticket_disponible, prix_ticket)
//     SELECT f.id_festival, s.capacite, f.prix_ticket
//     FROM festival f
//     JOIN scene s ON f.id_scene = s.id_scene;
//   `, (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Data inserted successfully into the ticket table.');
//   });
// });

// // afficher les lignes de la table ticket
// db.serialize(() => {
//   db.each('SELECT * FROM ticket', (err, row) => {
//     console.log(row);
//   });
// });









//express routes

const app = express();


app.use(express.urlencoded({ extended: true }));
//app.use(express.static('static'));
app.use(express.static(__dirname + '/static'));

// EJS
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Define the '/' route
// app.get('/', (req, res) => {
//   // Query 6 random festivals from the "festival" table
//   const query = `SELECT * FROM festival ORDER BY RANDOM() LIMIT 6`;
//   const query1 = `SELECT * FROM festival`;



//   // db.all(query, [], (err, rows) => {
//   //   if (err) {
//   //     console.error(err);
//   //     res.status(500).send('Internal Server Error');
//   //   } else {
//   //     res.render('index', { festivals: rows });
//   //   }

//   // });

//   db.all(query, [], (err, festivalsSix) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }

//     db.all(query1, [], (err, festivals) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       res.render('index', { festivalsSix: festivalsSix, festivals: festivals });
//     });
//   });
// });

app.get('/', (req, res) => {
  const query1 = `SELECT * FROM festival ORDER BY RANDOM() LIMIT 6`;
  const query2 = `SELECT * FROM festival ORDER BY date`;
  const query3 = `
    SELECT scene.adresse
    FROM festival
    JOIN scene ON festival.id_scene = scene.id_scene
    ORDER BY festival.date
  `;

  let festivalsSix, festivals, scenes;
  Promise.all([
    new Promise((resolve, reject) => {
      db.all(query1, [], (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        festivalsSix = result;
        resolve();
      });
    }),
    new Promise((resolve, reject) => {
      db.all(query2, [], (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        festivals = result;
        resolve();
      });
    }),
    new Promise((resolve, reject) => {
      db.all(query3, [], (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        scenes = result;
        resolve();
      });
    })
  ])
    .then(() => {
      res.render('index', { festivalsSix, festivals, scenes });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});




// app.get('/festivals/:id', (req, res) => {
//   const festivalId = req.params.id;

//   const query = `SELECT *
//     FROM festival
//     JOIN scene ON festival.id_scene = scene.id_scene
//     WHERE id_festival = ?`;
//   const query1 = `SELECT * FROM festival JOIN scene ON festival.id_scene = scene.id_scene ORDER BY RANDOM() LIMIT 7`;

//   db.all(query, [festivalId], (err, festival) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }

//     // Execute the scene query
//     db.all(query1, [], (err, festivalsSeven) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       console.log(festival)
//       res.render('festivalPage', { festival: festival[0], festivalsSeven: festivalsSeven });
//     });
//   });
// });

app.get('/festivals/:id', (req, res) => {
  const festivalId = req.params.id;

  const query1 = `SELECT *
  FROM festival
  JOIN scene ON festival.id_scene = scene.id_scene
  WHERE id_festival = ?`;

  const query2 = `SELECT * FROM festival JOIN scene ON festival.id_scene =    scene.id_scene ORDER BY RANDOM() LIMIT 7`;

  const query3 = `SELECT * 
  FROM festival_sponsor
  JOIN sponsor ON festival_sponsor.id_sponsor = sponsor.id_sponsor
  WHERE festival_sponsor.id_festival = ?`;

  const query4 = `SELECT *
  FROM festival_media
  JOIN media ON festival_media.id_media = media.id_media
  WHERE festival_media.id_festival = ?`;

  const query5 = `SELECT * FROM artiste WHERE id_festival = ?`;

  const query6 = `SELECT ticket_disponible from ticket WHERE id_festival = ?`

  db.get(query1, festivalId, (err, festival) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    db.all(query2, (err, festivalsSeven) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
        return;
      }

      db.all(query3, festivalId, (err, sponsor) => {
        if (err) {
          console.error(err.message);
          res.status(500).send('Internal Server Error');
          return;
        }

        db.all(query4, festivalId, (err, media) => {
          if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
          }

          db.all(query5, festivalId, (err, artiste) => {
            if (err) {
              console.error(err.message);
              res.status(500).send('Internal Server Error');
              return;
            }

            db.all(query6, festivalId, (err, ticket) => {
              if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
                return;
              }

              // console.log(ticket)
              res.render('festivalPage', {
                festival: festival,
                festivalsSeven: festivalsSeven,
                sponsor: sponsor,
                media: media,
                artiste: artiste,
                ticket: ticket
              });
            });
          });
        });
      });
    });
  });
});


app.post('/achat-ticket', (req, res) => {
  const ticketQuantity = req.body.ticketQuantity;
  const festivalId = req.body.festivalId;


  db.get(`SELECT ticket_disponible FROM ticket WHERE id_festival = ?`, festivalId, (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    const currentTicketCount = row.ticket_disponible;

    if (currentTicketCount < ticketQuantity) {
      res.status(400).send('Pas de ticket disponible pour le nombre de ticket que vous avez demandé');
      return;
    }

    const updatedTicketCount = currentTicketCount - ticketQuantity;

    db.get(`SELECT * FROM festival WHERE id_festival = ?`, festivalId, (err, row) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
        return;
      }
      const festival = row;
      db.run(`UPDATE ticket SET ticket_disponible = ? WHERE id_festival = ?`, [updatedTicketCount, festivalId], (err) => {
        if (err) {
          console.error(err.message);
          res.status(500).send('Internal Server Error');
          return;
        }
        //console.log(festival)
        res.render('felicitation', { ticketQuantity, festival });
      });
    });
  });
});





const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// Close the db connection when the app is closed
// SIGINT equivalent a Ctrl+C
process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});
