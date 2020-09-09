const Mutations = {
    async createItem(parent, args, ctx, info){
        //TODO : check if they are logged in

        // ctx.db.mutation.createItem references the prisma.graphql 
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);
        return item;
    }
};
module.exports = Mutations;