const Company = require('../../../models/company');
const setCompanySession = async (req, res, next) => {
    try {
        req.session.companyName = req.body.companyName;
        if(!req.session.companyName) throw new Error('There is an error in your session,please try again');
        next()
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
};

const getCompanySession = async (req, res, next) => {
    try {

        const token = req.header('token');
        console.log(token);
         console.log('s');
        if (!token) return res.status(401).json({ error: 'Access denied' });
        const decoded = await jwt.verify(token, '5566');
        console.log('gfffvdfdv');
        console.log(decoded,'gftdrs');
    
        if(!decoded.companyId) throw new Error('There is an error in your session');
        req.session.companyId = decoded.companyId;
        console.log(1);
        next();
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
};


const isBlockedCompany = async (req, res, next) => {
    try {
        if(!req.body.companyName) throw new Error('There is an issue in passing your company name');
        const company = await Company.find({ companyName: req.body.companyName});
        if(company.isBlocked) throw new Error('access denied, company is blocked please contact the admin for rectification');
        console.log('2');
        next();
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
};

module.exports = {
    setCompanySession,
    getCompanySession,
    isBlockedCompany
}