'use server'

const axios = require('axios');

export const bidSpice = async (data: any) => {
    try {
        
       console.log(data);
       
     const user = await axios.post(`${process.env.backendApi}/spice/bid`, data)
     console.log(user.status);
     
     return user.status;
     
     }
    catch (error: any) {
      return error.response.data
     }
  }