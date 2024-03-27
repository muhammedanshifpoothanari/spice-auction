const bcrypt = require('bcrypt');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

//////////////register\\\\\\\\\\\\\\\\\
const registerUserCntrl =  async (req,res) => {
    try {
      if(!req.body) throw Error('Request body is empty');
      if(!req.body.firstName &&
         !req.body.lastName &&
         !req.body.email &&
         !req.body.mobileNumber && 
         !req.body.password) throw Error('Request body is empty');

      const {
            firstName,
            lastName,
            email,
            mobileNumber,
            password,
           } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        firstName,
        lastName,
        email, 
        mobileNumber, 
        password:hashedPassword
    });
    const savedUserToDb = await newUser.save();

    if(!savedUserToDb) throw Error('Not able to save user, please try again later');
    res.status(200).send({
        message: "successFully registered the user"
    });
    } catch (error) {
        
        res.status(500).send({
             error: error.message, 
        });
    }
}


//////////////login\\\\\\\\\\\\\\\\\
const loginUserCntrl =  async (req,res) => {
    try {
      console.log('fhbjgv');
      if(!req.body) throw Error('Request body is empty');
      if(!req.body.email && 
         !req.body.password) throw Error('Request body is empty');

      const {
            email,
            password,
           } = req.body;
   
    const userByEmail = await User.findOne({ email: email});
    if(!userByEmail) throw Error('user with the Given mail not found');
    const hashedPassword = await  bcrypt.compare(password, userByEmail.password)

    if(!hashedPassword) throw Error('Given password is incorrect, please try again later');
    const token = jwt.sign({ userId: userByEmail._id }, '5566', {
        expiresIn: '1h',
        });
    res.status(200).json({ token });
    } catch (error) {
        
        res.status(500).send({
             error: error.message, 
        });
    }
}
module.exports = {
   registerUserCntrl,
   loginUserCntrl
}
