const DB = require('../../models')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const login = async (req) => {
    return DB.users.unscoped().findOne({
        where: {
            email: req.body.email
        }

    }).then((user) => {
        if (!user) {
            throw new Error('User not found')
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            throw new Error('Wrong user credentials')

        }
        const token = jwt.sign({ user: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        );
        delete user.dataValues.password
        return { ...user.dataValues, ...{ token } }
    })

}

const signup = async (req) => {

    return DB.users.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if (user) {
            throw new Error('User already exist')
        }
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        let data = {
            name: req.body.name,
            password: hash,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
        };
        return DB.users.create(data).then((dbUser) => {
            return DB.users.findByPk(dbUser.id)
        })
    })
}



module.exports = {
    login,
    signup
}