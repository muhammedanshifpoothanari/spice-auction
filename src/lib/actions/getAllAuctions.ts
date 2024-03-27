'use server'
const axios = require('axios');

export const getAllAuctions = async () => {
         try {
             const spices = await axios.get(`${process.env.backendApi}/auction/getAll`);
             console.log(spices.data.message);
             
             return spices.data.message;
         } catch (error: any) {
            return error.response.data
         }
}