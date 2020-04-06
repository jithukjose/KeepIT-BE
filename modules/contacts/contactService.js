const HttpStatus = require('http-status-codes');
const contactQueryBulider = require('./contactQueryBulider');

const getContacts = async (req, res, next) => {
    try {
        const getContactResponse = await contactQueryBulider.getContacts(req);
        res.status(HttpStatus.OK).send(getContactResponse)
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: error.message,
                code: HttpStatus.INTERNAL_SERVER_ERROR
            }
        })
    }
}

const postContacts = async (req, res, next) => {
    try {
        console.log(req.body, 'hellovvvvv')
        const postContactResponse = await contactQueryBulider.postContacts(req);
        res.status(HttpStatus.OK).send(postContactResponse)
    } catch (error) {
        console.log(error, 'error')
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: error.message,
                code: HttpStatus.INTERNAL_SERVER_ERROR
            }
        })
    }
}

const deleteContacts = async (req, res, next) => {
    try {
        const deleteContactResponse = await contactQueryBulider.deleteContacts(req);
        res.status(HttpStatus.OK).send(deleteContactResponse)
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: error.message,
                code: HttpStatus.INTERNAL_SERVER_ERROR
            }
        })
    }
}

const editContacts = async (req, res, next) => {
    try {
        const editContactResponse = await contactQueryBulider.editContacts(req);
        res.status(HttpStatus.OK).send(editContactResponse)
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: error.message,
                code: HttpStatus.INTERNAL_SERVER_ERROR
            }
        })
    }
}

const getContactsWithId = async (req, res, next) => {
    try {
        const getSingleContactResponse = await contactQueryBulider.getContactsWithId(req);
        res.status(HttpStatus.OK).send(getSingleContactResponse)
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: error.message,
                code: HttpStatus.INTERNAL_SERVER_ERROR
            }
        })
    }
}

module.exports = { getContacts, postContacts, deleteContacts, getContactsWithId, editContacts }