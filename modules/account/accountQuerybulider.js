DB = require('../../models')

const jwt = require("jsonwebtoken");

const login = async (req) => {
    return await DB.users.findOne({
        where: {
            email: req.body.email
        }

    }).then(user => {
        let token = jwt.sign({ user: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        );
        return { ...user.dataValues, token: token }

    })

}

module.exports = {
    login
}