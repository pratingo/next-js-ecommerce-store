const usersCourses = [
  {
    user_id: 1,
    course_id: 1,
  },
  {
    user_id: 3,
    course_id: 1,
  },
  {
    user_id: 3,
    course_id: 2,
  },
];

exports.up = async function up(sql) {
  // <insert magic here>
  for (const usersCourse of usersCourses) {
    await sql`
		INSERT INTO users_courses
			(user_id, course_id)
		VALUES
			(${usersCourse.user_id}, ${usersCourse.course_id});
	`;
  }
};

exports.down = async function down(sql) {
  // just in case...
  for (const usersCourse of usersCourses) {
    await sql`
		DELETE FROM
			users_courses
		WHERE
			user_id = ${usersCourse.user_id} AND course_id = ${usersCourse.course_id}
	`;
  }
};
