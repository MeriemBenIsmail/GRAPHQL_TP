import { v4 as uuidv4 } from "uuid";
export const Mutation = {
  createTodo: (_parent, { data }, { db, pubsub }) => {
    if (!db.users.find((u) => u.id == data.user)) {
      throw new Error("User does not exist.");
    }
    const newTodo = {
      id: uuidv4(),
      ...data,
      status: data?.status ?? "WAITING",
    };
    db.todos.push(newTodo);
    pubSub.publish("newTodo", { newTodo });
    return newTodo;
  },

  updateTodo: (_parent, { data }, { db }) => {
    let updatedTodo = updateTodoInput;

    const updatedTodos = db.todos.map((todo) => {
      if (todo.id === updateTodoInput.id) {
        updatedTodo = {
          id: updateTodoInput.id,
          ...data,
        };
        return updateTodo1;
      } else return todo;
    });
    db.todos = updatedTodos;
    return updatedTodo;
  },

  deleteTodo: (_parent, { todoId }, { db }) => {
    const deletedTodo = db.todos.find((todo) => todo.id === todoId);

    db.todos = db.todos.filter((todo) => todo.id !== todoId);
    return deletedTodo;
  },
};
