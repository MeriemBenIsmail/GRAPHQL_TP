export const Query = {
  hello: (parent, args, context, info) => {
    console.log("parent : ", parent);
    console.log("context : ", context);
    console.log("info : ", info);
    console.log("args : ", args);
    return `Hello ${args.name || "World"}`;
  },
  infos: () => {
    return {
      name: "Sellaouti",
      firstname: "Aymen",
    };
  },
  getAllStudents: (_parent, _args, { db }) => {
    return db.students;
  },
  getStudent: (_parent, { id }, { db }) => {
    return db.students.find((student) => student.id == id);
  },
  getAllTodos: (_parent, _args, { db }) => {
    return db.todos;
  },
  getTodo: (_parent, { id }, { db }) => {
    return db.todos.find((todo) => todo.id == id);
  },
  getAllUsers: (_parent, _args, { db }) => {
    return db.users;
  },
  getUser: (_parent, { id }, { db }) => {
    return db.users.find((user) => user.id == id);
  },
};
