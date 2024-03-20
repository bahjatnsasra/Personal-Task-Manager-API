const jwt = require('jsonwebtoken')
require("dotenv").config();


function verifyJWT(req, res, next){
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        res.status(401).json({message: "unAuthorized"});
    }else{
        const token = authHeader.split(' ')[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode) => {
            if(err) res.status(403).json({message: "invalid token"});
            req.user = decode.username
            next()
        })
    }
    
}

module.exports = {
    verifyJWT
}