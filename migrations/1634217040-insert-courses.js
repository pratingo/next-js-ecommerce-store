const courses = [
  { title: 'web-design', description: 'html and css' },
  { title: 'tech-tools', description: 'docker, testing' },
];

exports.up = async function up(sql) {
  for (const course of courses) {
    await sql`
  		INSERT INTO courses
  			(title, description)
  		VALUES
  			(${course.title}, ${course.description});

  	`;
  }

  // alternativ shorcut
  // await sql`
  // 	INSERT INTO users ${sql(users, 'name', 'favorite_color')};
  // `;
};

// deletes table

exports.down = async function down(sql) {
  // await sql`DELETE FROM
  //   courses
  // WHERE
  // 	(title = ${course.title} and description = ${course.description});
  // 	`;
  for (const course of courses) {
    await sql`
  	DELETE FROM users
  		WHERE
  			name = ${course.title} AND  favorite_color = ${course.description};
  `;
  }
};
