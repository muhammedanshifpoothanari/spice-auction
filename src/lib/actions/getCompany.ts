
'use server'
const axios = require('axios');

export const getCompany = async (companyId: string) => {
         try {
             const request = {
                'companyId': companyId
             }
             const spices = await axios.post(`${process.env.backendApi}/companyProfile`, request);
             console.log(spices.data.message);
             
             return spices.data.message;
         } catch (error: any) {
            return error.response.data
         }
}