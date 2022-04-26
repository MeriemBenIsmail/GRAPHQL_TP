export const Todo = {
  user: (todo, _args, { db }) => {
    return db.users.find((user) => user.id == todo.user);
  },
};
