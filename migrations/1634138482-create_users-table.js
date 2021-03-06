// creates table

exports.up = async function up(sql) {
  await sql`
    CREATE TABLE users (
     id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
     name VARCHAR(40) NOT NULL,
     favorite_color VARCHAR(20) NOT NULL
);
  `;
};

// deletes table

exports.down = async function down(sql) {
  await sql`DROP TABLE users`;
};
