'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAuthReducer } from "@/redux/auth/authSlice";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter()
  const dispatch = useDispatch();
  const token = useSelector((state: {auth:{token: 'notProvided'}}) => state.auth.token);
  const [user, setShowLogin] = useState(false);
  useEffect(() => {

   
   if(token && token !== 'notProvided') {
    setShowLogin(true)
   } else {
    setShowLogin(false)
   }
    
  }, [token])

  const logout = () => {
    console.log('jhgh');
    console.log(token,'token');
     dispatch(setAuthReducer({token: 'notProvided'}))
  }
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center overflow-hidden">
              {/* <h1 className="text-xl font-semibold tracking-tight text-gray-800">spice auction</h1> */}
 
              <Image
                src={'/logo.svg'}
                height={100}
                width={200} alt={"spice auction"}                />
              
              
            </div>
            <div className="content hidden lg:ml-6 lg:flex lg:space-x-8">
              <button
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                onClick={() => router.push('/')}
              >
                Home
              </button>
              <button
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                onClick={() => router.push('/auctioncenter')}
              >
                Auction Center
              </button>
              {user?
              <button
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                onClick={() => router.push('/profile')}
              >
                Profile
              </button>:null}
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:items-center">
            {/* <Button className="flex-shrink-0 bg-[#facc15] p-1 rounded-full text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <SunIcon className="h-6 w-6" />
            </Button>
            <div className="ml-4 relative flex-shrink-0">
              <Button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <BellIcon className="h-6 w-6" />
              </Button>
            </div> */}
            <div className="ml-4 relative">
             {!user? <div className="flex items-center space-x-3">
                <LogOutIcon className="h-6 w-6 text-gray-800" />
                <Link className="text-sm font-medium text-gray-800 hover:text-gray-500" href="/auth">
                  Login
                </Link>
              </div>: <div className="flex items-center space-x-3">
                <LogOutIcon className="h-6 w-6 text-gray-800" />
                <button className="text-sm font-medium text-gray-800 hover:text-gray-500" onClick={logout}>
                  Logout
                </button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SunIcon(props: any) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function LogOutIcon(props: any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}
