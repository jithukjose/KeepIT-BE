const {
  body,
  param,
} = require('express-validator');
const {
  users,
} = require('../../models');

const validate = (method) => {
  switch (method) {
    case 'postUserCase': {
      return [
        body('name').exists()
          .withMessage('nickname is required')
          .isLength({
            min: 5,
          })
          .withMessage('wrong name lengh')
          .isLength({
            max: 15,
          })
          .withMessage('wrong name lengh'),

        body('password').exists().withMessage('password required').isLength({
          min: 8,
        }),

        body('email')
          .exists()
          .isEmail()
          .custom((value) => users
            .findOne({
              where: {
                email: value,
              },
            })
            .then((user) => {
              if (user) {

                throw new Error('this email is already in use');

              }
            })),

        body('street')
          .isLength({
            min: 5,
          })
          .isLength({
            max: 15,
          }),

        body('city')
          .isLength({
            min: 5,
          })
          .isLength({
            max: 15,
          }),
      ];
    }

    case 'getSingleUserCase': {
      return [
        param('userId')
          .exists()
          .custom((value) => users.findByPk(value).then((user) => {
            if (!user) {
              {
                throw new Error('user does not exist!!');
              }
            }
          })),
      ];
    }
    case 'deleteUserCase': {
      return [
        param('userId')
          .exists()
          .custom((value) => users.findByPk(value).then((user) => {
            if (!user) {
              {
                throw new Error('user does not exist!!');
              }
            }
          })),
      ];
    }

    case 'editUserCase': {
      return [
        body('name')
          .exists()
          .withMessage('nickname is required')
          .isLength({
            min: 5,
          })
          .withMessage('wrong name lengh')
          .isLength({
            max: 15,
          })
          .withMessage('wrong name lengh'),

        body('email')
          .exists()
          .isEmail(),
        param('userId')
          .exists().custom((value) => users
            .findOne({
              where: {
                email: value,
              },
            })
            .then((user) => {
              if (user) {

                throw new Error('this email is already in use');

              }
            }))

          .custom((value) => users.findByPk(value).then((user) => {
            if (!user) {
              {
                throw new Error('user does not exist!!');
              }
            }
          })),
      ];
    }
    default:
      throw new Error();
  }
};

module.exports = {
  validate,
};