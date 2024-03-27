'use client'
import { CardContent, CardFooter, Card, CardTitle, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import ProfileCard from "./profile-card"
import { SpiceCard, SpiceCardForAuction } from "./spice-card"
import { getAllSpices } from "@/lib/actions/getAllSpices"
import { useEffect, useState } from "react"
import { getUserId } from "@/lib/actions/getUserByToken"
import { useSelector } from "react-redux"
import { getAllAuctions } from "@/lib/actions/getAllAuctions"
import { AuctionCard, AuctionCardForAuctionCenter } from "./auction-card"
import { current } from "@reduxjs/toolkit"
import { GetAllByCompanyNameAndDate } from "@/lib/actions/GetAllByCompanyNameAndDate"
import { useRouter } from "next/navigation"
import { toast } from "./ui/use-toast"

export default function GridLayout() {
  const router = useRouter()
  const token = useSelector((state: {auth:{token: 'notProvided'}}) => state.auth.token);
  const [bid, setBiddingData] = useState('');
  const [spices, setSpices] = useState([]);
 
  const setAuctioner = async (value:string) => {
    if(token !== 'notProvided') {
      await getAllByCompanyNameAndDate(value)
      setBiddingData(value);
    } else {
      toast({
        title: "You Have To Login First To  bidded",
        description: "",
      })
        router.push('/auth')
    }
  }

   const getAllByCompanyNameAndDate = async (value: any) => {
        const response = await  GetAllByCompanyNameAndDate(value);
        setSpices(response)
   }

   const [auctionData, setAuctionData] = useState([])
   const GetAllAuctions = async () => {
    const response = await getAllAuctions();
    if (response) { 
      console.log(response, 'Original response');
      
      const currentDate = new Date();
      const filteredAuctions = response.filter((auction: any) => {
        // const startDate = new Date(auction.startDate);
        const endDate = new Date(auction.endDate);
        
        return currentDate < endDate;
      });
            setAuctionData(filteredAuctions);
    }
  }

  useEffect(() =>{
    GetAllAuctions()
  },[]);

  return (
    <div className="layout grid grid-cols-12 gap-1">
      <div className="header col-start-1 col-end-5 p-4 flex items-center bg-white shadow-md">
      <div className="flex  items-center justify-center bg-white">
      <h1 className="text-xl font-semibold">For Ads Placement Contact Admin</h1>
    </div>
      </div>
      <div className="body col-start-5 col-end-13 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 p-4 bg-white shadow-md overflow-auto max-h-[450px]">
        {!bid ?        
        auctionData.map((auction, index)  =><AuctionCardForAuctionCenter key={index} data={auction} onClicker={setAuctioner}/>):
        spices.map((auction, index)  =><SpiceCardForAuction key={index} data={auction} onClicker={setAuctioner}/>)
        }
        
      </div>
    </div>
  )
}
