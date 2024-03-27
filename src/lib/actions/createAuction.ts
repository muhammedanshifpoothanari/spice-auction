'use server'

const axios = require('axios');



export const CreateAuction = async (data: any) => {
    try {
        
        const request =  {
            'companyName': data.firstName,
            'startDate': data.startDate,
            'endDate': data.endDate,
        }
     const user = await axios.post(`${process.env.backendApi}/auction/company/create`, request)
     console.log(user.data);
     
     return user.data;
     
     }
    catch (error: any) {
     
      return error.response.data
     }
  }