BEGIN;

    DROP TABLE IF EXISTS tickets CASCADE;
    DROP TABLE IF EXISTS artists CASCADE;


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
    artist VARCHAR NOT NULL,
    artist_id INTEGER NOT NULL,
    location VARCHAR NOT NULL,
    date VARCHAR NOT NULL,
    time VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    type INTEGER NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    views INTEGER NOT NULL
);

INSERT INTO artists (artist_name , description , genre) VALUES 
('Rihana','Jomana in arabic','Hip-hop'),
('Bon Iver','Justin Vernon and his band','Indie-Rock');

INSERT INTO tickets (artist,artist_id,location,date,time,genre,description,type,price,quantity,views) VALUES 
('Rihanna',1,'Israel','5/11/2019','16:00 - 22:00','Hip-hop','It's a good event, you know?','VIP',300,400,315),
('Bon Iver',2,'Israel','6/11/2019','17:00 - 00:00','Indie-Rock','It's a good event, you know?','Regular',200,400,400);


COMMIT;
