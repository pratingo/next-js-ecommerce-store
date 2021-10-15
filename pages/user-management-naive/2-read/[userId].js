export default function ReadUser(props) {
  if (!props.readUser) return <div>user not found</div>;
  return <div>read {props.readUser.name} user</div>;
}

export async function getServerSideProps(context) {
  const { readUserById } = await import('../../../util/database.js');

  const userToRead = context.query.userId;

  const readUser = await readUserById(userToRead);

  return {
    props: {
      readUser: readUser || null,
    },
  };
}
