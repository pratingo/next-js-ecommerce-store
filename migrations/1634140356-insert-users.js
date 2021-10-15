// creates table

const users = [
  { name: 'Ines', favorite_color: 'Yellow' },
  { name: 'Lukas', favorite_color: 'Blue' },
  { name: 'Andrea', favorite_color: 'Purple' },
  { name: 'Ingo', favorite_color: 'Black' },
  { name: 'Felix', favorite_color: 'Anthracite' },
];

exports.up = async function up(sql) {
  // for (const user of users) {
  //   await sql`
  // 		INSERT INTO users
  // 			(name, favorite_color)
  // 		VALUES
  // 			(${user.name}, ${user.favorite_color});

  // 	`;
  // }

  // alternativ shorcut
  await sql`
		INSERT INTO users ${sql(users, 'name', 'favorite_color')};
	`;
};

// deletes table

exports.down = async function down(sql) {
  // await sql`DELETE FROM
  //   users
  // WHERE
  // 	(name = 'Ines' and favorite_color = 'Yellow') OR
  // 	(name = 'Lukas' and favorite_color = 'Blue') OR
  // 	(name = 'Andrea' and favorite_color = 'Purple') OR
  // 	(name = 'Ingo' and favorite_color = 'Black') OR
  // 	(name = 'Felix' and favorite_color = 'Anthracite');

  // 	`;
  for (const user of users) {
    await sql`
		DELETE FROM users
			WHERE
				name = ${user.name} AND  favorite_color = ${user.favorite_color};
	`;
  }
};

//	await sql`
// INSERT INTO users
//   (name, favorite_color)
// VALUES
//   ('Marko', 'Pink'),
//   ('Ellen', 'Blue'),
//   ('Karen', 'Silver'),
//   ('Daryl', 'Brown');
// `;
