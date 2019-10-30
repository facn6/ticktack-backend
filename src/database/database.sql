BEGIN;

    DROP TABLE IF EXISTS tickets CASCADE;
    DROP TABLE IF EXISTS artists CASCADE;
    DROP TABLE IF EXISTS events CASCADE;
    DROP TABLE IF EXISTS images CASCADE;


CREATE TABLE artists
(
    artist_id SERIAL PRIMARY KEY,
    artist_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    genre VARCHAR(50) NOT NULL

);

CREATE TABLE tickets
(
    ticket_id SERIAL PRIMARY KEY,
    artist_name Varchar(255),
    artist_id INTEGER NOT NULL,
    location VARCHAR NOT NULL,
    date VARCHAR NOT NULL,
    time VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    views INTEGER NOT NULL,
    image_url TEXT
);

CREATE TABLE events
(
    id SERIAL PRIMARY KEY,
    event_name TEXT NOT NULL,
    ticket_id VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    genre VARCHAR(255)
);

CREATE TABLE images
(
    image_id SERIAL PRIMARY KEY,
    image_url TEXT NOT NULL,
    event_name VARCHAR(255) ,
    artist_name Varchar(255),
    ticket_name Varchar(255),
);


INSERT INTO artists (artist_name , description , genre) VALUES
('Rihanna','Jomana in arabic','Hip-hop'),
('Bon Iver','Justin Vernon and his band','Indie-Rock');


INSERT INTO tickets (artist_name,artist_id,location,date,time,genre,description,type,price,quantity,views,image_url) VALUES
('Rihanna' ,1,'Israel','5/11/2019','16:00 - 22:00','Hip-hop','It is a good event, you know?','VIP',300,400,315, 'https://imgur.com/9XRO11e'),
('Rihanna' ,1,'Israel','5/11/2019','16:00 - 22:00','Hip-hop','It is a good event, you know?','Regular',300,400,315, 'https://imgur.com/9XRO11e'),
('Bon Iver' ,2,'Israel','6/11/2019','17:00 - 00:00','Indie-Rock','It is a good event, you know?','Regular',200,400,400, 'https://imgur.com/FdFkOBF'),
('Bon Iver' ,2,'Israel','6/11/2019','17:00 - 00:00','Indie-Rock','It is a good event, you know?','Exclusive',200,400,400, 'https://imgur.com/FdFkOBF');

INSERT INTO events (id, event_name,ticket_id,description , genre) VALUES
(1,'some event',1,'Jomana in arabic', 'pop'),
(2,'some event',1 ,'Jomana in arabic', 'pop'),
(3,'some event',1,'Justin Vernon and his band', 'pop'),
(4,'some event',1,'Justin Vernon and his band', 'pop');

INSERT INTO images (image_url ,event_name, artist_name , ticket_name) VALUES
('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzori41UNF_zwpFO1cRf9WY9dbkS5XEiwv-pf2s3wcwk7jfd3v', 'Riana Event' , 'Riana' , 'VIP'),
('https://media.vanityfair.com/photos/5c1a95455401872cbd1b3716/master/pass/ariana-grande-christmas-tree.jpg','Ariana Event' , 'Ariana' , 'VIP');

COMMIT;
