
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    
    try {
        const token = req.header("Authorisation");
        if(!token) {
            return res.status(400).json({msg: "Invalid Authorisation"})
        }

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if(err) {
                return res.status(400).json({msg: "Invalid Authorisation"})
            }

            req.user = user;
            next();
        });

    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

module.exports = auth;