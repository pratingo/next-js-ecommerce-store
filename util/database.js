import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// reads environment variables
// from .env file to connect to postgres

dotenvSafe.config();

const sql = postgres();

// console.log(sql`SELECT 1;`.then((result) => console.log(result)));

export async function getUsers() {
  const users = await sql`
    SELECT * FROM users;
  `;

  const userOutput = users.map((user) => {
    return camelcaseKeys(user.name);
  });
  // console.log('userOutput', userOutput);

  return userOutput;
}

export async function getProductss() {
  const products = await sql`
    SELECT * FROM products;
  `;
  // console.log(products);
  return products;
}

export async function getProduct(id) {
  const product = await sql`
    SELECT * FROM
      products
    WHERE
      id = ${id}
  `;
  return product[0];
}

// comes now from database
// export const products = [
//   {
//     id: 1,
//     name: 'umbrella_blue',
//     url: '/images/umbrella_blue.png',
//     price: 42,
//   },
//   {
//     id: 2,
//     name: 'umbrella_red',
//     url: '/images/umbrella_red.png',
//     price: 37,
//   },
//   {
//     id: 3,
//     name: 'umbrella_black',
//     url: '/images/umbrella_black.png',
//     price: 29,
//   },
// ];

export async function deletedUserById(id) {
  const users = await sql`
    DELETE FROM
      users
    WHERE
      id = ${id}
    RETURNING *;
  `;
  return camelcaseKeys(users[0]);
}

export async function updateUserById(id, { name, favoriteColor }) {
  const users = await sql`
    UPDATE
      users
    SET
      name = ${name},
      favorite_color = ${favoriteColor}
    WHERE
      id = ${id}
    RETURNING
        id,
        name,
        favorite_color;
  `;
  return camelcaseKeys(users[0]);
}

export async function readUserById(id) {
  const users = await sql`
    SELECT
      *
    FROM
      users
    WHERE
      id = ${id};
  `;
  return camelcaseKeys(users[0]);
}

export async function createUser({ name, favoriteColor }) {
  const users = await sql`
  INSERT INTO
    users
    (name, favorite_color)
  VALUES
    (${name}, ${favoriteColor})

  RETURNING
    id,
    name,
    favorite_color
    ;
    `;

  return camelcaseKeys(users[0]);
}
