exports.up = async function up(sql) {
  console.log('create users_courses join / junction table...');
  await sql`
	CREATE TABLE users_courses (
		user_id integer REFERENCES users(id) ON DELETE CASCADE,
		course_id integer REFERENCES courses(id) ON DELETE CASCADE
	);
	`;
};

exports.down = async function down(sql) {
  console.log('dropping users_courses join / junction table...');
  await sql`
		DROP TABLE users_courses;
	`;
};
