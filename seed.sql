-- The USE statement is used to signify that we are now working in the SQL database that is named in the USE statement.
USE favoriteThings;
--The INSERT INTO statement is used here to insert rows (insertions) with the values given after the word VALUES into the  table mspecififed in the order I specifiy in this statement below under the Columns (labels) that are in the () following the INSERT INTO statement
INSERT INTO names (first_name, last_name)
VALUES 
('Moriah', 'Kincheloe'),
('Geovonni', 'Banano'),
('Michael', 'Corleone'),
('Rusty', 'Bohnsteil'),
('Shayla', 'Griffin'),
('Peter', 'Luchese'),
('Jada', 'Gambino'),
('Fredo', 'Rodolfo'),
('Lori', 'Monk'),
('Fred', 'Monk'),
('Penny', 'Gracie'),
('Luna', 'Jane'),
('Steven', 'Griffin'),
('Leslee', 'Jones'),
('Steven', 'Jones'),
('Dwyane', 'Wade'),
('Jesse', 'Stanley'),
('Michael', 'Jordan'),
('Hanh', 'Vu'),
('Margo', 'Mendez'),
('Moriah', 'Jones'),
('Heathcliffe', 'Ledger'),
('Joaquim', 'Phoenix'),
('Victor', 'Oladipo'),
('Reggie', 'Miller'),
('George', 'Ferguson'),
('Nicholas', 'Nakashima'),
('Steph', 'Bobbin'),
('Craig', 'Bobbin'),
('Wladymir', 'Klitscko'),
('Theodore', 'Decker'),
('Holden', 'Caulfield'),
('Jay', 'Gatsby'),
('Thomas', 'Tandy'),
('Phillip', 'Gise'),
('Brad', 'Marchand'),
('Walter', 'Payton'),
('Cooper', 'Williams'),
('Travis', 'Benson'),
('Patrice', 'Bergeron'),
('Zdeno', 'Chara'),
('Lee', 'Emmerson'),
('Dan', 'Henderson'),
('Vito', 'Corleone'),
('Calvin', 'Johnson'),
('Tim', 'Horton'),
('Bart', 'Simpson'),
('Bruce', 'Wayne'),
('Manuel', 'Herrera'),
('Willy', 'Wilson');--the VALUES inserted into the table must end in a ; or the statement will not be closed.

INSERT INTO threeFavorites (favorite_1, favorite_2, favorite_3, names_id)
VALUES 
('cards', 'movies', 'crab', 1),
('takis', 'Playstation', 'beer', 2),
('power', 'money', 'respect', 3),
('metal', 'Music', 'seafood', 4),
('food', 'family', 'fun', 5),
('money', 'power', 'respect', 6),
('nuggets', 'reading', 'pink', 7),
('family', 'eating', 'tutoring', 8),
('Fred', 'movies', 'oysters', 9),
('Lori', 'family', 'friends', 10),
('food', 'food', 'food', 11),
('biting', 'scratching', 'sleeping', 12),
('success', 'carving', 'family', 13),
('family', 'smoking', 'Pepsi', 14),
('family', 'hockey', 'whiskey', 15),
('basketball', 'HOF', 'sailing', 16),
('success', 'working', 'Beer', 17),
('basketball', 'HOF', 'tequila', 18),
('working', 'reading', 'eating', 19),
('people', 'friends', 'family', 20),
('family', 'whiskey', 'cards', 21),
('acting', 'reading', 'joking', 22),
('acting', 'reading', 'joking', 23),
('basketball', 'rehab', 'Pacers', 24),
('basketball', 'radio', 'Pacers', 25),
('XBOX', 'Nintendo', 'smoking', 26),
('XBOX', 'cats', 'smoking', 27),
('Craig', 'family', 'art', 28),
('Steph', 'hiking', 'family', 29),
('boxing', 'Russia', 'Vitaly', 30),
('Boris', 'reading', 'artwork', 31),
('complaining', 'quiting', 'drinking', 32),
('success', 'Daisy', 'Daisy', 33),
('jogging', 'blogging', 'poetry', 34),
('money', 'money', 'money', 35),
('hockey', 'Canada', 'Bruins', 36),
('family', 'football', 'HOF', 37),
('Broncos', 'Nuggets', 'Avalanche', 38),
('Lee', 'Ashley', 'fumar', 39),
('hockey', 'Canada', 'Bruins', 40),
('hockey', 'Bruins', 'fighting', 41),
('tickling', 'poker', 'rope', 42),
('punching', 'wrestling', 'fighting', 43),
('money', 'power', 'family', 44),
('football', 'family', 'Sunday', 45),
('coffee', 'donuts', 'beaches', 46),
('skateboarding', 'jokes', 'pranks', 47),
('family', 'crusading', 'fighting', 48),
('construction', 'bricks', 'mortar', 49),
('pickles', 'parrots', 'people', 50);--the VALUES inserted into the table must end in a ; or the statement will not be closed.