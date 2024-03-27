'use client'
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "./ui/button";

export function AuctionCard({data}: any) {

  const startDate = new Date(data?.startDate);
  const endDate = new Date(data?.endDate);


  const options :Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedAuctionDate = startDate.toLocaleDateString('en-US', options);
  const formattedEndTime = endDate.toLocaleDateString('en-US', options);



  return (
    
    <Card className="w-[350px]">
      <CardHeader>
        <Avatar className="mx-auto w-24 h-24 rounded-full border-2 border-white">
          <AvatarImage alt="Cardamom Field" src="/placeholder.svg?height=96&width=96" />
        </Avatar>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-lg font-semibold">Managed By: {data?.companyName}</p>
          <p>Auction Date: {formattedAuctionDate}</p>
          <p>End Time: {formattedEndTime}</p>
        </div>
      </CardContent>
      <CardFooter className="bg-green-500 text-white text-center py-2">
      </CardFooter>
    </Card>
  )
}


export function AuctionCardForAuctionCenter({data,onClicker}:any) {

  const startDate = new Date(data?.startDate);
  const endDate = new Date(data?.endDate);


  const options:Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedAuctionDate = startDate.toLocaleDateString('en-US', options);
  const formattedEndTime = endDate.toLocaleDateString('en-US', options);



  return (
    
    <Card className="w-[350px]">
      <CardHeader>
        <Avatar className="mx-auto w-24 h-24 rounded-full border-2 border-white">
          <AvatarImage alt="Cardamom Field" src="/placeholder.svg?height=96&width=96" />
        </Avatar>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-lg font-semibold">Managed By: {data?.companyName}</p>
          <p>Auction Date: {formattedAuctionDate}</p>
          <p>End Time: {formattedEndTime}</p>
        </div>
      </CardContent>
      <CardFooter className=" flex bg-green-500 text-white text-center py-2">
        <Button type="submit" className="w-full" onClick={()=> onClicker(data)}>Bid</Button>
      </CardFooter>
    </Card>
  )
}
