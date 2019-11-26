const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

const isAuthorized = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, 'missecretito')
        console.log(payload._id)
        const user = await UserModel.findOne({
            _id: payload._id,
            tokens: token
        })
        if (!user) {
            throw new Error('No autorizado')
        }
        req.user = user;
        next()
    } catch (error) {
        console.log(error)
       return  res.status(401).send(error.message)
    }
}
const isAdmin = async(req,res,next)=>{
    if(req.user.role!=='admin'){
        return res.status(403).send({message:'Para acceder a esta ruta es necesario ser admin'})
    }
    next();
}
module.exports = {
    isAuthorized,
    isAdmin
}