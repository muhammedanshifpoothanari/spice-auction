'use server'
import {  createUser, login } from "../type/auth";

const axios = require('axios');

export const UserLogin = async (data:login) => {
    try {

        const request =  {
            'email': data.email,
            'password': data.password
        }
     const user = await axios.post(`${process.env.backendApi}/login/user`, request)
     console.log(user.data.token);
     
     return user.data.token;
     
     }
    catch (error: any) {
     
      return error.response.data
     }
  }


export const CreateUser = async (data:createUser) => {
    try {
        
        const request =  {
            'firstName': data.firstName,
            'lastName': data.lastName,
            'email': data.email,
            'mobileNumber': data.mobileNumber,
            'password': data.password
        }
     const user = await axios.post(`${process.env.backendApi}/register/user`, request)
     console.log(user.data);
     
     return user.data;
     
     }
    catch (error: any) {
     
      return error.response.data
     }
  }



  
  export const CompanyLogin = async (data:login) => {
    try {

        const request =  {
            'companyName': data.companyName,
            'password': data.password
        }
     const user = await axios.post(`${process.env.backendApi}/login/company`, request)
     console.log(user.data.token);
     
     return user.data.token;
     
     }
    catch (error: any) {
     
      return error.response.data
     }
  }
