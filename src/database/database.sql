BEGIN;

    DROP TABLE IF EXISTS tickets CASCADE;
    DROP TABLE IF EXISTS artists CASCADE;
    DROP TABLE IF EXISTS events CASCADE;


CREATE TABLE artists
(
    artist_id SERIAL PRIMARY KEY,
    artist_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    genre VARCHAR(50) NOT NULL,

);

CREATE TABLE tickets
(
    ticket_id SERIAL PRIMARY KEY,
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
);

CREATE TABLE events
(
    event_id SERIAL PRIMARY KEY,
    event_name TEXT NOT NULL,
    ticket_id VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
);

CREATE TABLE images
(
    image_id SERIAL PRIMARY KEY,
    image_url TEXT NOT NULL,
    event_id VARCHAR(255) ,
    artist_id Varchar(255) ,
);


INSERT INTO artists (artist_name , description , genre) VALUES
('Rihanna','Jomana in arabic','Hip-hop','https://imgur.com/kOtOyHA'),
('Bon Iver','Justin Vernon and his band','Indie-Rock','https://imgur.com/FdFkOBF');


INSERT INTO tickets (artist_id,location,date,time,genre,description,type,price,quantity,views,image_url) VALUES
(1,'Israel','5/11/2019','16:00 - 22:00','Hip-hop','It is a good event, you know?','VIP',300,400,315, 'https://imgur.com/9XRO11e'),
(1,'Israel','5/11/2019','16:00 - 22:00','Hip-hop','It is a good event, you know?','Regular',300,400,315, 'https://imgur.com/9XRO11e'),
(2,'Israel','6/11/2019','17:00 - 00:00','Indie-Rock','It is a good event, you know?','Regular',200,400,400, 'https://imgur.com/FdFkOBF'),
(2,'Israel','6/11/2019','17:00 - 00:00','Indie-Rock','It is a good event, you know?','Exclusive',200,400,400, 'https://imgur.com/FdFkOBF');

INSERT INTO events (ticket_id, description , genre) VALUES
(1,'Jomana in arabic'),
(2 ,'Jomana in arabic'),
(3,'Justin Vernon and his band'),
(4,'Justin Vernon and his band');

INSERT INTO images (image_url ,event_id, artist_id) VALUES
('https://imgur.com/9XRO11e', 1 , 1),
('Justin Vernon and his band',2, 2);

COMMIT;
