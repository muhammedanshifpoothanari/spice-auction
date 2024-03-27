const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const setUserSession = async (req, res, next) => {
    try {
        console.log('reached');
        req.session.email = req.body.email;
        if(!req.session.email) throw new Error('There is an error in your session,please try again');
        next()
    } catch (error) {
        res.status(500).send({  
            error: error.message
        })
    }
};

const getUserSession = async (req, res, next) => {
    try {
        const token = req.header('token');
        console.log(token);
         console.log('s');
        if (!token) return res.status(401).json({ error: 'Access denied' });
        const decoded = await jwt.verify(token, '5566');
        console.log('gfffvdfdv');
        console.log(decoded,'gftdrs');
    
        if(!decoded.userId) throw new Error('There is an error in your session');
        req.session.userId = decoded.userId;
        console.log(1);
        next();
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
};

const isBlocked = async (req, res, next) => {
    try {
        if(!req.session.userId) throw new Error('There is an issue in passing your id');
        const user = await User.find({ _id: req.session.userId});
        if(user.isBlocked) throw new Error('access denied, user is blocked please contact the admin for rectification');
        next();
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
};

module.exports = {
    setUserSession,
    getUserSession,
    isBlocked
}