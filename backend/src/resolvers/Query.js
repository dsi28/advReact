const {forwardTo} = require('prisma-binding');

const Query = {
    items: forwardTo('db')
    // async items(parent, args, cxt, info){
    //     const items = await cxt.db.query.items();
    //     return items;
    // }
};
module.exports = Query;