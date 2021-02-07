const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;


module.exports = {
    authenticate,
    getById,
    //create
};

async function authenticate({ username, password }) {
    
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ sub: user.username }, config.secret, { expiresIn: '7d' });
        
        return {

            token
        };
    }
}



async function getById(id) {
    config.id=id;
    return await User.find({username : id});
}

/* async function create(userParam) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
} */




