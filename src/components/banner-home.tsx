import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BannerHome() {
  return (
    <div className="bg-[#1e4d2b] py-4 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* divider */}
        <div className="flex justify-between ">
          <div className="flex-col">
            <div className="border border-white w-[80px] h-1 bg-white"></div>
            <div className="border border-white h-[80px] w-1 bg-white"></div>
          </div>
          <div className="flex">
            <div className="border border-white w-[80px] h-1 bg-white"></div>
            <div className="border border-white h-[80px] w-1 bg-white "></div>
          </div>
        </div>
         {/* dividerEnd */}
        <div className="flex justify-between items-center py-12   md:py-20">
          <div className="z-10">
            <h1 className="text-6xl font-bold">A Cardamom Auction</h1>
            <p className="mt-4 text-xl">Cardamom auction live across the world</p>
            <p className="mt-2 text-xl">Available 24/7 only on spice-auction</p>
            <div className="flex justify-between ">
        
        </div>
            <Button className="mt-6 flex-col bg-inherit hover:bg-inherit text-black hover:text-white">
               <div className="flex w-full justify-between">
                  <div className="flex-col">
                    <div className="border border-white w-[10px] h-1 bg-white"></div>
                    <div className="border border-white h-[10px] w-1 bg-white"></div>
                  </div>
                  <div className="flex">
                    <div className="border border-white w-[10px] h-1 bg-white"></div>
                    <div className="border border-white h-[10px] w-1 bg-white "></div>
                  </div>
                </div>
          
                Know More

                <div className="flex w-full justify-between">
                   <div className="flex w-full justify-between">
                      <div className="flex-col">
                         <div className="border border-white h-[10px] w-1 bg-white"></div>
                         <div className="border border-white w-[10px] h-1 bg-white"></div>
                       </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-end w-[10px] h-[10px]">
                         <div className="border border-white w-[10px] h-1 bg-white "></div>
                      </div>
                      
                      <div className="border border-white h-[10px] w-1 bg-white "></div>
                    </div>
                </div>
                </div>
              
              </Button>
          </div>
          <Image className="absolute  inset-0  z-0 mx-auto my-auto"
          src={'/green-cardamom-pods-bowl-isolated-white-background-with-copy-space-text-images-used-as-flavorings-both-food-drink-as-cooking-spices-as-medicine-frame-composition-close-PhotoRoom.png-PhotoRoom.png'}
          width={680}
          height={940}
          alt="" />
          <div className="text-right">
            <p className="text-lg">Feb 13, 2024</p>
          </div>
        </div>
        {/* divider */}
        <div className="flex justify-between ">
          <div className="flex-col">
          <div className="border border-white h-[80px] w-1 bg-white"></div>
            <div className="border border-white w-[80px] h-1 bg-white"></div>
            
          </div>
          <div className="flex">
            <div className="flex items-end w-[80px] h-[80px]">
            <div className="border border-white w-[80px] h-1 bg-white "></div>
            </div>
            
            <div className="border border-white h-[80px] w-1 bg-white "></div>
          </div>
        </div>
         {/* dividerEnd */}
        <div className="flex items-center justify-between pb-12 md:pb-24">
          <div className="flex items-center">
            <CircleIcon className="text-[#f44336] h-4 w-4" />
            <p className="ml-2 text-xl font-semibold">Live</p>
          </div>
          <h2 className="text-5xl font-bold">Auction -- Idukki at Pala</h2>
        </div>
      </div>
    </div>
  )
}


function CircleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
