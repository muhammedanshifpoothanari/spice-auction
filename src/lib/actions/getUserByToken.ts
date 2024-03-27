'use server'
const axios = require('axios');
const jwt = require('jsonwebtoken');
export const getUserByToken = async (token: string) => {
    try {
        if(!token) throw new Error('Token not found');
        const config = {
            headers: {
                'token': `${token}`
            }
        };

        const user = await axios.get(`${process.env.backendApi}/userProfile`, config);
        console.log(user.data);
        return user.data.message; 
    } catch (err) {
        console.log(err); 
    }
}


export const  getUserId= async (token: string) => {
    try {
        if(!token) throw new Error('Token not found');
        

        const decoded = await jwt.verify(token, '5566');

        console.log(decoded,'oiopuiy78t6r5e4jy');
        
        return decoded.userId; 
    } catch (err) {
        // Handle errors
        console.log(err); 
    }
}


export const getCompanyById= async (token: string) => {
    try {
        if(!token) throw new Error('Token not found');
        

        const decoded = await jwt.verify(token, '5566');

        console.log(decoded,'oiopuiy78t6r5e4jy');
        
        return decoded.companyId; 
    } catch (err) {
        // Handle errors
        console.log(err); 
    }
}

