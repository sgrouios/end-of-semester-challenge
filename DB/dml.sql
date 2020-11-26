INSERT INTO Member([Name], Email, [Password], UserType, Pending)
VALUES ('Stephen', 'stephen@stephen.com', 'password', 'Manager', 0),
('Josh', 'josh@josh.com', 'password', 'Player', 0),
('Jack', 'jack@jack.com', 'password', 'Player', 1);

INSERT INTO Fixture(FixtureDate, Venue)
VALUES('2020-11-22T18:40:40', 'Oval 1'),
('2020-11-22T18:40:40', 'Oval 2'),
('2020-11-25T18:40:40', 'Oval 1'),
('2020-11-25T18:40:40', 'Oval 2'),
('2020-11-28T17:40:40', 'Oval 1'),
('2020-11-28T18:40:40', 'Oval 2');

INSERT INTO CourtFee (AmountPaid, PayeeID, FixtureID)
VALUES(20, 1, 1),
(20, 1, 2),
(20, 1, 3),
(10, 1, 4),
(10, 2, 4);