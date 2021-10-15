export default function CreateUser(props) {
  if (!props) return <div>User not created</div>;

  return <div>create user {props.user.id}</div>;
}

export async function getServerSideProps(context) {
  const { createUser } = await import('../../../util/database.js');

  const name = context.query.name;
  const favoriteColor = context.query.favoriteColor;

  const user = await createUser({ name, favoriteColor });

  return {
    props: {
      user: user || null,
    },
  };
}
