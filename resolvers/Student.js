export const Student = {
  classroom: (student, _args, { db }) => {
    return db.classroom.find((classroom) => classroom.id == student.classroom);
  },
};
