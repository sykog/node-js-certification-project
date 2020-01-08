const Admin = require('./Admin')

exports.authenticate = (req,res,next) => {
    //const token = !!req.headers['authorization'] ? req.headers['authorization'].split('')[1]:null
    
    if(Admin.verifyToken(req.headers['authorization'])){
        next()
    } else{
        res.status(401).json({
            msg: 'Not Authorized'
        })
    }
    
}