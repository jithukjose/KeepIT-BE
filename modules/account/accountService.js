const querybulider = require('../account/accountQuerybulider')
const HttpStatus = require('http-status-codes');

const login = async (req, res) => {


    try {
        const login = await querybulider.login(req)

        res.status(HttpStatus.OK).send(login)

    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: error.message,
                code: HttpStatus.INTERNAL_SERVER_ERROR,
            },

        })

    }
}

const signup = async (req, res) => {
    try {
        const createUser = await querybulider.signup(req)
        res.status(HttpStatus.OK).send(createUser)
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: error.message,
                code: HttpStatus.INTERNAL_SERVER_ERROR
            }
        })

    }
}

module.exports = {
    login,
    signup
}