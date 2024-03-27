'use server'

const axios = require('axios');



export const CreateSpice = async (data: any) => {
    try {
        
        const request =  {
            'name': 'cardamom',
            'spiceType':'cardamom',
            'sellerId': data.userId,
            'companyName': data.selectedCompany,
            'auctionDate': data.auctionStartDate,
            'endTime': data.auctionEndDate,
            'weight': data.weight,
            'minimumPrice': data.minimumPrice,
            "quality": {
                "grade": 'A+',
                "colour": 'green',
                "size": '20mm'
            }
        }
     const user = await axios.post(`${process.env.backendApi}/spice/create`, request)
     console.log(user.data);
     
     return user.data;
     
     }
    catch (error: any) {
     
      return error.response.data
     }
  }