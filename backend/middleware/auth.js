const jwt = require("jsonwebtoken");

exports.validateAuthorization = async (req, res, next) => {
    try {
        const token = req.body.token;
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token', token });
            }
            req.user = decoded;
            next();
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "error while validating token"
        });
    }
}

exports.checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'this is a protected route' });
        }
        next();
    };
};

exports.isAdmin = exports.checkRole('admin');
exports.isCustomer = exports.checkRole('customer');
