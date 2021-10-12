import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// reads environment variables
// from .env file to connect to postgres

dotenvSafe.config();

const sql = postgres();

// console.log(sql`SELECT 1;`.then((result) => console.log(result)));

export async function getUsers() {
  const userss = await sql`
    SELECT * FROM userss;
  `;

  const userOutput = userss.map((user) => {
    return camelcaseKeys(user.name);
  });
  // console.log('userOutput', userOutput);

  return userOutput;
}

export async function getProductss() {
  const products = await sql`
    SELECT * FROM products;
  `;
  console.log(products);
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
