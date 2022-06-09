-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists sanderson_characters;

CREATE table characters (
    id BIGINT GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR NOT NULL, 
    series VARCHAR NOT NULL, 
    alias VARCHAR
); 

INSERT INTO characters (name, series, alias) VALUES
('Kaladin Storm-Blessed',  'The Storm-Light Archive', null), 
('Vin', 'Mistborn', 'Valette Renoux'),
('Raoden', 'Elantris', null);