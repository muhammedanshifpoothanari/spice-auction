'use client'
import { CardContent, CardFooter, Card, CardTitle, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import ProfileCard from "./profile-card"
import { SpiceCard } from "./spice-card"
import { getAllSpices } from "@/lib/actions/getAllSpices"
import { useEffect, useState } from "react"
import { getCompanyById, getUserId } from "@/lib/actions/getUserByToken"
import { useSelector } from "react-redux"
import { getAllAuctions } from "@/lib/actions/getAllAuctions"
import { AuctionCard } from "./auction-card"
import { getCompany } from "@/lib/actions/getCompany"

export default function GridLayout() {
  const token = useSelector((state: {auth: {token: ''}}) => state.auth.token);
   const [spiceData, setSpicesData] = useState([])
   const [auctionData, setAuctionData] = useState([])
   const [id, setUserId] = useState('')
   const [companyName, setCompanyName] = useState('');
   
   const getAllTheSpices = async () => {
    const userId = await getUserId(token);
    
    let companyId 
    if(!userId) {
      companyId = await getCompanyById(token);
      const company  =  await getCompany(companyId);
      setCompanyName(company[0]?.name)
      const response = await getAllSpices()
      if (response) {
  
        setSpicesData(response.filter((spice: any) =>  spice.companyName === company[0]?.companyName));
      }
    } else {
      const response = await getAllSpices()
      if (response) {
        console.log('reacged',userId);
        
        
        setSpicesData(response.filter((spice: any) =>  spice.sellerId === userId));
      }
    }
      
   }

   const getAllTheAuction = async () => {
      const companyId = await getCompanyById(token);
      if (companyId) {
        const response = await getAllAuctions()
        const company  =  await getCompany(companyId);
      if (response) { 
        
        setAuctionData(response.filter((a: any) => a.companyName === company[0]?.companyName));
      }
      } else {
      const response = await getAllAuctions()
      if (response) { 
        setAuctionData(response);
      }
    }
      
   }
   useEffect(() => {
    console.log(spiceData,'jhygtfytdr');
    
    
   },[spiceData]);

   useEffect(() => {
    getAllTheSpices();
    getAllTheAuction()
   },[]);
  return (
    <div className="layout grid grid-cols-12 gap-1">
      <div className="header col-start-1 col-end-5 p-4 bg-white shadow-md">
        <ProfileCard/>
      </div>
      <div className="body col-start-5 col-end-13 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 p-4 bg-white shadow-md overflow-auto max-h-[450px]">
        <Card className="w-[360px] px-1">
          <CardHeader>
            <CardTitle>All Spices</CardTitle>
          </CardHeader>
          {spiceData.map((spice, index) => <SpiceCard key={index} data={spice} id={companyName}/>)}
         
        </Card>
        
        <Card className="w-[360px] px-1">
          <CardHeader>
            <CardTitle>All Auctions</CardTitle>
          </CardHeader>
          {auctionData.map((auction, index)  => <AuctionCard key={index} data={auction} />)}
        </Card>
        
      </div>
    </div>
  )
}
