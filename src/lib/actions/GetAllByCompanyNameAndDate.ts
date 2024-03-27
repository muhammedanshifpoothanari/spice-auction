'use server'
const axios = require('axios');

export const GetAllByCompanyNameAndDate = async (bid: any) => {
         try {
            console.log(bid);
            
             const spices = await axios.post(`${process.env.backendApi}/spice/getAllByCompanyNameAndDate`,bid);
             console.log(spices.data.message);
             
             return spices.data.message;
         } catch (error: any) {
            return error.response.data
         }
}