export default function DeleteUser(props) {
  if (!props.deletedUser) return <div>user not found</div>;

  return <div>user {props.deletedUser.id} deleted</div>;
}

export async function getServerSideProps(context) {
  const { deletedUserById } = await import('../../../util/database');
  console.log(context.query);
  const userIdToDelete = context.query.userId;
  const deletedUser = await deletedUserById(userIdToDelete);

  return {
    props: {
      deletedUser: deletedUser || null,
    },
  };
}
