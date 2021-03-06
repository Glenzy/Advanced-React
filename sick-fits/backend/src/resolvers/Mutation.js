const mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info) //info contains the query to pass to the backend
    return item;
  },

  async updateItem(parent, args, ctx, info) {
    const updates = {
      ...args
    };

    delete updates.id;

    const item = await ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info) //info contains the query to pass to the backend
    return item;
  }
};

module.exports = mutations;