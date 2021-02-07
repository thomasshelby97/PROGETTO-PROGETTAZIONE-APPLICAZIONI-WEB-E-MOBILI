const userService = require('./user.service');


exports.authenticate = (req, res, next) => {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}
/* exports.register = (req, res, next) => {
    ;
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
} */


exports.getById = (req, res, next) => {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

