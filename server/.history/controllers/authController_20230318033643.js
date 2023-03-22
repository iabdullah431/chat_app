const User = require('../models/user')


exports.register = (req,res,next) => {
    let data = {name , username, password} = req.body;

    User.create(data)
    
    .then(user => {
        res.json(user.signJwt());
    })
    .catch(next);
}