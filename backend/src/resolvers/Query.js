const Query = {
    dogs(parent, args, cxt, info){
        return [{name: 'dog1'}, {name: 'dog2'}]
    }
};
module.exports = Query;