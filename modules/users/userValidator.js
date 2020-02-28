const { users } = require('../../models')
var { body, query, param } = require('express-validator')

const validate = (method) => {
  switch (method) {
    case 'postUserCase': {
      return [
        body('name')
          .exists()
          .withMessage('nickname is required')
          .isLength({ min: 5 })
          .withMessage('wrong name lengh')
          .isLength({ max: 15 })
          .withMessage('wrong name lengh'),

        body('email')
          .exists()
          .isEmail()
          .custom((value) => {
            console.log(value, 'value')
            return users
              .findOne({
                where: {
                  email: value
                }
              })
              .then((user) => {
                if (user) {
                  {
                    throw new Error('this email is already in use')
                  }
                }
              })
          }),

        body('street')
          .isLength({ min: 5 })
          .isLength({ max: 15 }),

        body('city')
          .isLength({ min: 5 })
          .isLength({ max: 15 })
      ]
    }

    case 'getSingleUserCase': {
      return [
        param('userId')
          .exists()
          .custom((value) => {
            return users
              .findOne({
                where: {
                  id: value
                }
              })
              .then((user) => {
                if (!user) {
                  {
                    throw new Error('user does not exist!!')
                  }
                }
              })
          })
      ]
    }
    case 'deleteUserCase': {
      return [
        param('userId')
          .exists()
          .custom((value) => {
            return users
              .findOne({
                where: {
                  id: value
                }
              })
              .then((user) => {
                if (!user) {
                  {
                    throw new Error('user does not exist!!')
                  }
                }
              })
          })
      ]
    }
    case 'editUserCase': {
      return [
        param('userId')
          .exists()
          .custom((value) => {
            return users
              .findOne({
                where: {
                  id: value
                }
              })
              .then((user) => {
                if (!user) {
                  {
                    throw new Error('user does not exist!!')
                  }
                }
              })
          })
      ]
    }
  }
}

module.exports = {
  validate
}
