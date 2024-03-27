'use client'

import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCompanyById, getUserByToken } from "@/lib/actions/getUserByToken";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";
import { UserUpdate } from "@/lib/actions/userUpdate";
import { getCompany } from "@/lib/actions/getCompany";
import { CreateAuction } from "@/lib/actions/createAuction";
import { getAllAuctions } from "@/lib/actions/getAllAuctions";
import { CreateSpice } from "@/lib/actions/createSpice";

export default function ProfileCard() {
  const token = useSelector((state: {auth:{token: ''}}) => state.auth.token);
  const [userId ,setUserId] = useState('');
  const [weight, setWeight] = useState('');
  const [minimumPrice, setMinimumPrice] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [userType, setUserType] = useState('');
  const [cardType, setcardType] = useState('profile');
  const [isCompany, setCompany] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [auctionDate, setAuctionDate] = useState([ {companyName: '',startDate: '', endDate: ''}]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [auctionStartDate, setAuctionStartDate] = useState('');
  const [auctionEndDate, setAuctionEndDate] = useState('');

  useEffect(() => {
   getUser()
  },[])

  const getUser = async () => {
  
    const userData = await getUserByToken(token);
    if(!userData) {
     const companyId = await getCompanyById(token);
      const company  =  await getCompany(companyId);
      setCompany(true)
  
    setFirstName(company[0].companyName);
     
      setEmail(company[0].registrationNumber);
      setMobileNumber(company[0].phone);
      
    } else {
      setUserId(userData._id)
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setMobileNumber(userData.mobileNumber);
      setUserType(userData.userType);
    }
    
  }


 
  const submit = async () => {
    
    if (
      firstName.trim() === '' ||
      lastName.trim() === ''||
      email.trim() === '' ||
      userType.trim() === '' ) {
    toast({
     title: "Please fill all the required fields.",
     description: "",
   })
 } else {
  const response = await UserUpdate({
    firstName,
    lastName,
     email,
     mobileNumber,
     userType,
 })
 
if(!response.error) { 
  toast({
    title: "You Have Succusfully updateed user",
    description: "",
  })
  
} else { toast({
  title: response.error,
  description: "",
})}

 }
}

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
    
    console.log(filteredAuctions, 'Filtered auctions');
    setAuctionDate(filteredAuctions);
  }
}



useEffect(() => {
  GetAllAuctions()
},[])

const submitSpice = async () => {
    
  if (
    userId.trim() === '' ||
    selectedCompany.trim() === '' ,
    weight.trim() === '' ||
    minimumPrice.trim() === ''
  ){
  toast({
   title: "Please fill all the required fields.",
   description: "",
 })
} else {
const response = await CreateSpice({
  userId,
  selectedCompany,
  weight,
  minimumPrice,
  auctionStartDate,
   auctionEndDate
})

if(!response.error) { 
toast({
  title: "You Have Succusfully created auction",
  description: "",
})
setcardType('profile')
} else { toast({
title: response.error,
description: "",
})}

}
}

const submitAuction = async () => {
    
  if (
    firstName.trim() === '' 
  ){
  toast({
   title: "Please fill all the required fields.",
   description: "",
 })
} else {
const response = await CreateAuction({
  firstName,
  startDate,
  endDate
})

if(!response.error) { 
toast({
  title: "You Have Succusfully created auction",
  description: "",
})
setcardType('profile')
} else { toast({
title: response.error,
description: "",
})}

}
}
  return (
    isCompany === false? cardType === 'profile'?
    (<Card className="w-[350px] p-4">
     
          {userType === 'seller'? <Button className="bg-green-500 text-white" onClick={() =>setcardType('addASpice')}>Add a Spice</Button>:null}
     
      <CardHeader>
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage alt="safvan muhammed" src="/placeholder.svg?height=100&width=100" />
          </Avatar>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold mb-1">Name: {firstName} {lastName}</p>
        <p className="mb-1">Email: {email}</p>
        <p className="mb-1">Mobile: {mobileNumber}</p>
        <p className="mb-4">User Type: {userType}</p>

        <Button className="w-full justify-center" onClick={() => setcardType('true')}>
        <PencilIcon className="mr-2" />
        Edit{"\n          "}
        </Button>
         
      </CardContent>
    </Card>):
    cardType === 'addASpice'?(<Card className="w-[350px] p-4">
      <CardHeader >
      <div className="flex items-end justify-end cursor-pointer"onClick={() => setcardType('profile')} >❌</div>
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage alt="safvan muhammed" src="/placeholder.svg?height=100&width=100" />
          </Avatar>
        </div>
        
      </CardHeader>
      <CardContent>
        <div className="space-y-2 hidden">
        <Input type="text" name="sellerId" id="" value={userId} hidden/>
        </div>
        <div>
        <select 
  name="companyName" 
  style={{ width: '100%', padding: '8px', fontSize: '16px' }}
  value={selectedCompany}
  onChange={e => {
    const [companyName, startDate, endDate] = e.target.value.split('|');
    setSelectedCompany(companyName);
    setAuctionStartDate(startDate);
    setAuctionEndDate(endDate);
  }}
>
  <option value="" style={{ fontStyle: 'italic', color: '#999' }}>Select an Available Company</option>
 
  {auctionDate.map(company => (
    <option 
      key={company?.companyName} 
      value={`${company?.companyName}|${company?.startDate}|${company?.endDate}`}
      style={{ fontWeight: 'bold' }}
    >
      🏭 <h3>{company?.companyName}</h3>  (Start:🏁 {company?.startDate}, End:⏰ {company?.endDate})
    </option>
  ))}
</select>
{selectedCompany && <div>{selectedCompany}</div>}
      
    </div>
        <div className="space-y-2">
        <p className="mb-1 ">weight:</p>
        <Input type="text" placeholder={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div className="space-y-2">
        <p className="mb-1">minimumPrice:</p>
        <Input type="number" placeholder={minimumPrice} onChange={e => setMinimumPrice(e.target.value)}/>
        </div>
      
        
        <div className="space-y-2">
        <Button className="w-full justify-center" onClick={submitSpice} >
       
        Submit
        <SubmitIcon className="mr-2" />{"\n          "}
        </Button>
        </div>
      </CardContent>
    </Card>)
    :(<Card className="w-[350px] p-4">
      <CardHeader >
      <div className="flex items-end justify-end cursor-pointer"onClick={() => setcardType('profile')} >❌</div>
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage alt="safvan muhammed" src="/placeholder.svg?height=100&width=100" />
          </Avatar>
        </div>
        
      </CardHeader>
      <CardContent>
      <div className="space-y-2">
        <p className="text-lg flex-col gap-2 font-semibold mb-1">Name:</p> <Input type="text" placeholder={firstName} onChange={e => setFirstName(e.target.value)}/> <Input type="text" placeholder={lastName} onChange={e => setLastName(e.target.value)}/>
        </div>
        <div className="space-y-2">
        <p className="mb-1 ">Email:</p>
        <Input type="text" placeholder={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="space-y-2">
        <p className="mb-1">Mobile:</p>
        <Input type="text" placeholder={mobileNumber} onChange={e => setMobileNumber(e.target.value)}/>
        </div>
        <div className="space-y-2">
        <p className="mb-4">User Type: </p>
        <Input type="text" placeholder={userType} onChange={e => setUserType(e.target.value)}/>
        </div>
        
        <div className="space-y-2">
        <Button className="w-full justify-center" onClick={submit} >
       
        Submit
        <SubmitIcon className="mr-2" />{"\n          "}
        </Button>
        </div>
      </CardContent>
    </Card>):
    
    // // <input type="text" name="companyName"  value="<%= session.state.company.companyName %>" readonly>
    // <label for="startDate">auctionDate</label>
    // <input type="date" name="startDate">
    // <label for="endDate">endTime</label>
    // <input type="date" name="endDate"></input>
    // {/*  */}
    cardType === 'addAnAuction'?(<Card className="w-[350px] p-4">
      <CardHeader >
      <div className="flex items-end justify-end cursor-pointer"onClick={() => setcardType('profile')} >❌</div>
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage alt="safvan muhammed" src="/placeholder.svg?height=100&width=100" />
          </Avatar>
        </div>
        
      </CardHeader>
      <CardContent>
      <div className="space-y-2">
        <p className="text-lg flex-col gap-2 font-semibold mb-1">companyName:</p> <Input type="text" placeholder={firstName} onChange={e => setFirstName(e.target.value)}/>
        </div>
        <div className="space-y-2">
        <p className="mb-1 ">startDate:</p>
        <Input type="date" placeholder={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}/>
        </div>
        <div className="space-y-2">
        <p className="mb-1">endDate:</p>
        <Input type="Date" placeholder={mobileNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}/>
        </div>
      
        
        <div className="space-y-2">
        <Button className="w-full justify-center" onClick={submitAuction} >
       
        Submit
        <SubmitIcon className="mr-2" />{"\n          "}
        </Button>
        </div>
      </CardContent>
    </Card>):
    <Card className="w-[350px] p-4">
     
     <Button className="bg-green-500 text-white" onClick={() =>setcardType('addAnAuction')}>Add an Auction</Button>

 <CardHeader>
   <div className="flex justify-center">
     <Avatar>
       <AvatarImage alt="safvan muhammed" src="/placeholder.svg?height=100&width=100" />
     </Avatar>
   </div>
 </CardHeader>
 <CardContent>
   <p className="text-lg font-semibold mb-1">Name: {firstName} {lastName}</p>
   <p className="mb-1">Registration Number: {email}</p>
   <p className="mb-1">Mobile: {mobileNumber}</p>
   

 
    
 </CardContent>
</Card>)
    
  
}


function PencilIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function SubmitIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
