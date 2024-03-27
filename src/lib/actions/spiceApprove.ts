'use server'

const axios = require('axios');



export const Approve = async (spiceId:string) => {
    try {

   
      console.log('3');
      const approved = await axios.post(`${process.env.backendApi}/spice/update`, {id:spiceId});
      console.log('4',approved.data.message);
  
      if(!approved) throw new Error('not able to approve');
      console.log('5');
      return approved.data.message.isRejected;
    } catch (error) {
      console.log('6');
  
    }  
}