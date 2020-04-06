const DB = require('../../models');

const getContacts = (req) => DB.posts.findAll({
    where: {
        userId: req.decode.userId
    },

})

const postContacts = async (req) => {

    const contactLists = {
        userId: req.body.userId,
        name: req.body.name,
        email: req.body.email,
        street: req.body.street,
        city: req.body.city
    };

    return DB.posts.create(contactLists);

};


const getContactsWithId = (req) => DB.posts.findByPk(req.params.userId).then((result) => {
    if (!result) {
        throw new Error('Not Found!!');
    } else {
        return result;
    }
});

const deleteContacts = async (req) => {
    await DB.posts.destroy({
        where: {
            id: req.params.userId,
        },
    });
};

module.exports = { getContacts, postContacts, getContactsWithId, deleteContacts }