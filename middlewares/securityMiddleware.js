const jwt = require('jsonwebtoken');
const httpStatus = require('http-status-codes')

const auth = (req, res, next) => {
    const token = req.headers.authorization

    const tokenWithOutBearer = token.slice(7)

    if (!tokenWithOutBearer) {
        return res.status(httpStatus.FORBIDDEN).send({ message: "Token not found" })
    }
    else {

        jwt.verify(tokenWithOutBearer, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {

                return res.status(httpStatus.FORBIDDEN).send({ message: err.message })

            }
            else {

                req.decode = decoded


                next()
            }
        })
    }
}

module.exports = {
    auth
}