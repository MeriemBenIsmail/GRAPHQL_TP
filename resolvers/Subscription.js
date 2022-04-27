export const Subscription = {
  newTodo: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator("newTodo");
    },
  },
  updatedTodo: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator("updatedTodo");
    },
  },
  deletedTodo: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator("deletedTodo");
    },
  },
};
