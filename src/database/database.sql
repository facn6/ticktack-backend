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
    image_url VARCHAR NOT NULL

);

CREATE TABLE tickets
(
    ticket_id SERIAL PRIMARY KEY,
    artist VARCHAR NOT NULL,
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
    image_url VARCHAR NOT NULL
);

CREATE TABLE events
(
    event_id SERIAL PRIMARY KEY,
    tickets_ids VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR NOT NULL
);

INSERT INTO artists (artist_name , description , genre, image_url) VALUES
('Rihanna','Jomana in arabic','Hip-hop','https://imgur.com/kOtOyHA'),
('Bon Iver','Justin Vernon and his band','Indie-Rock','https://imgur.com/FdFkOBF');


INSERT INTO tickets (artist,artist_id,location,date,time,genre,description,type,price,quantity,views,image_url) VALUES
('Rihanna',1,'Israel','5/11/2019','16:00 - 22:00','Hip-hop','It is a good event, you know?','VIP',300,400,315, 'https://imgur.com/9XRO11e'),
('Rihanna',1,'Israel','5/11/2019','16:00 - 22:00','Hip-hop','It is a good event, you know?','Regular',300,400,315, 'https://imgur.com/9XRO11e'),
('Bon Iver',2,'Israel','6/11/2019','17:00 - 00:00','Indie-Rock','It is a good event, you know?','Regular',200,400,400, 'https://imgur.com/FdFkOBF'),
('Bon Iver',2,'Israel','6/11/2019','17:00 - 00:00','Indie-Rock','It is a good event, you know?','Exclusive',200,400,400, 'https://imgur.com/FdFkOBF');

INSERT INTO events (tickets_ids, description , genre, image_url) VALUES
('1,2','Jomana in arabic','https://imgur.com/9XRO11e'),
('3,4','Justin Vernon and his band','https://imgur.com/FdFkOBF');

COMMIT;
