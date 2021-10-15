export default function UpdateUser(props) {
  if (!props.updatedUser) return <div>user not found</div>;
  return (
    <>
      <div>user {props.updatedUser.id} updated</div>
      <pre>{props.updatedUser.name}</pre>
    </>
  );
}

export async function getServerSideProps(context) {
  const { updateUserById } = await import('../../../util/database.js');
  const userToUpdate = context.query.userId;
  console.log(context.query);
  const favoriteColor = context.query.favoriteColor || '';
  const name = context.query.name || '';

  const updatedUser = await updateUserById(userToUpdate, {
    name,
    favoriteColor,
  });

  return {
    props: {
      updatedUser: updatedUser || null,
    },
  };
}
