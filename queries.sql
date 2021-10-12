CREATE TABLE userss (
  id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name VARCHAR(40) NOT NULL,
  favorite_color VARCHAR(20) NOT NULL
);

INSERT INTO users
  (name, favorite_color)
VALUES
  ('Ines', 'Yellow');

INSERT INTO userss
  (name, favorite_color)
VALUES
  ('Marko', 'Pink'),
  ('Ellen', 'Blue'),
  ('Karen', 'Silver'),
  ('Daryl', 'Brown');

CREATE TABLE products (
  id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name VARCHAR(50) NOT NULL,
  url VARCHAR(50) NOT NULL,
  price INT NOT NULL
);


INSERT INTO products
  (name, url, price)
VALUES
  ('umbrella_blue', '/images/umbrella_blue.png', 42),
  ('umbrella_red', '/images/umbrella_red.png', 37),
  ('umbrella_black', '/images/umbrella_black.png', 29);