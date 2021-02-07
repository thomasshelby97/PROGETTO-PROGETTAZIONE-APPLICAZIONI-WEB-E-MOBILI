const dataService = require('./data.service');



exports.getClassi = (req, res,next) => {
    dataService.getClassi()
    .then(data => data ? res.json(data) : res.sendStatus(404))
    .catch(err => next(err));
}


exports.getHomeData = (req, res, next) => {
    dataService.getHomeData()
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

exports.getType = (req, res, next) => {
    dataService.getType(req.body)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}