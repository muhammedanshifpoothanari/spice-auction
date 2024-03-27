'use server'

const axios = require('axios');

import { createUser } from "../type/auth";

export const UserUpdate = async (data:createUser) => {
    try {
        
        const request =  {
            'firstName': data.firstName,
            'lastName': data.lastName,
            'email': data.email,
            'mobileNumber': data.mobileNumber,
            'userType': data.userType
        }
     const user = await axios.post(`${process.env.backendApi}/userProfile/update`, request)
     console.log(user.data);
     
     return user.data;
     
     }
    catch (error: any) {
     
      return error.response.data
     }
  }