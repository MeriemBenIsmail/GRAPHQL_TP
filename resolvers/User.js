export const User = {
  todos: (user, _args, { db }) => {
    return db.todos.filter((todo) => todo.user == user.id);
  },
};
