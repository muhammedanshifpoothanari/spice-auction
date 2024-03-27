"use client"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Approve } from "@/lib/actions/spiceApprove";
import { Input } from "./ui/input";
import { getUserByToken } from "@/lib/actions/getUserByToken";
import { useSelector } from "react-redux";
import { bidSpice } from "@/lib/actions/bidSpice";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";


export function SpiceCard({data,id}: any) {
  const [company, setId] = useState('');
  const [isApproved ,setIsApproved] = useState(false);
  const auctionDate = new Date(data?.auctionDate);
  const endTime = new Date(data?.endTime);
  const currentDate = new Date();

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedAuctionDate = auctionDate.toLocaleDateString('en-US', options);
  const formattedEndTime = endTime.toLocaleDateString('en-US', options);

  // Check if the current date is greater than or equal to the end time
  const isExpired = currentDate >= endTime;
  useEffect(()=> {
    if(id !== undefined || id !== ''){
      setId(id);
    }
  }, [])

  useEffect(()=> {
    
    setIsApproved(data?.isApproved);
  }, [])

  const approve = async() => {
    
    const response = await Approve(data._id)
    setIsApproved(response);
  }
  return (
    company !== ''?  <Card className="w-[350px]">
    <CardHeader>
      <Avatar className="mx-auto w-24 h-24 rounded-full border-2 border-white">
        <AvatarImage alt="Cardamom Field" src="/placeholder.svg?height=96&width=96" />
      </Avatar>
    </CardHeader>
    <CardContent>
      <div className="text-center">
        <p className="text-lg font-semibold">Name: {data?.name}</p>
        <p>Managed By: {data?.companyName}</p>
        <p>Weight: {data?.weight} Kg</p>
        <p>Seller: You are The Seller</p>
        <p>Auction Date: {formattedAuctionDate}</p>
        <p>End Time: {formattedEndTime}</p>
        <p>Minimum Price: ₹ {data?.minimumPrice}</p>
        <p>Current Bid:₹ {data?.bidPrice}</p>
        <p>Is Rejected: {isApproved ? '✅' : '❌'}</p>
       
      </div>
    </CardContent>
    <CardFooter className="bg-green-500 text-white text-center py-2">
    
    <Button className="w-full" onClick={approve}>✍️ {!isApproved ? 'reject' : 'Approve'} </Button>
    </CardFooter>
  </Card>:
    <Card className="w-[350px]">
      <CardHeader>
        <Avatar className="mx-auto w-24 h-24 rounded-full border-2 border-white">
          <AvatarImage alt="Cardamom Field" src="/placeholder.svg?height=96&width=96" />
        </Avatar>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-lg font-semibold">Name: {data?.name}</p>
          <p>Managed By: {data?.companyName}</p>
          <p>Weight: {data?.weight} Kg</p>
          <p>Seller: You are The Seller</p>
          <p>Auction Date: {formattedAuctionDate}</p>
          <p>End Time: {formattedEndTime}</p>
          <p>Minimum Price: ₹ {data?.minimumPrice}</p>
          <p>Current Bid:₹ {data?.bidPrice}</p>
          <p>Is Rejected: true</p>
        </div>
      </CardContent>
      <CardFooter className="bg-green-500 text-white text-center py-2">
        {isExpired && data?.bidPrice && <p>You have sold the product successfully </p>}
        
      </CardFooter>
    </Card>
  )
}



export function SpiceCardForAuction({data}: any) {
  const router = useRouter()
  const token = useSelector((state: {auth:{token: string}}) => state.auth.token);
  const [holderId, setHolderId] = useState('');
  const [holderFirstName, setHolderFirstName] = useState('');
  const [holderLastName, setHolderLastName] = useState('');
  const [holderMail, setHolderMail] = useState('');
  const [holderMobileNumber, setHolderMobileNumber] = useState('');
  const [spiceId, setSpiceId] = useState('');
  const [bidPrice, setBidPrice] = useState('')

  const getUser = async () => {
    const userData = await getUserByToken(token);
    setHolderId(userData._id)
    setHolderFirstName(userData.firstName);
    setHolderLastName(userData.lastName);
    setHolderMail(userData.email);
    setHolderMobileNumber(userData.mobileNumber);
  }

useEffect(() => {
  setSpiceId(data?._id)
  getUser();
},[])

  
const Bid = async () => {
  if(bidPrice >= data?.minimumPrice && bidPrice > data?.bidPrice){
    console.log('^^^^^^^^^');
    
    const response = await bidSpice({
      holderId,
      bidPrice,
      spiceId,
      holderFirstName,
      holderLastName,
      holderMail,
      holderMobileNumber,
    })
  
   
      
      toast({
        title: "You Have Succusfully bidded",
        description: "Our Company will notify you regarding the bid",
      })
      router.push('/profile')
      
    
  } else {
    toast({
      title: "bid price must be greater than the current",
      description: "",
    })
  }
 
  
}




  return (
     <Card className="w-[350px]">
    <CardHeader>
      <Avatar className="mx-auto w-24 h-24 rounded-full border-2 border-white">
        <AvatarImage alt="Cardamom Field" src="/placeholder.svg?height=96&width=96" />
      </Avatar>
    </CardHeader>
    <CardContent>
      <div className="text-center">
        <p className="text-lg font-semibold">Spice: {data?.name}</p>
        <p>Managed By: {data?.companyName}</p>
        <p>Weight: {data?.weight} Kg</p>
       
        <p>Minimum Price: ₹ {data?.minimumPrice}</p>
        <p>Current Bid:₹ {data?.bidPrice}</p>
        
       
      </div>
    </CardContent>
    <CardFooter className="bg-green-500 text-white text-center py-2">
    <Input type="number" onChange={e => setBidPrice(e.target.value)} />
    <Button type="submit" onClick={Bid}>Bid</Button>
    {/* <Button className="w-full" onClick={approve}>✍️ {!isApproved ? 'reject' : 'Approve'} </Button> */}
    </CardFooter>
  </Card>)
}