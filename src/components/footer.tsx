
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#1e4d2b] text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Spice Auction</h2>
          <p className="mb-6">
            Indias Latest Auction Site For Cardamom
          </p>
          <p className="font-semibold">Connect with us on</p>
          <div className="flex space-x-4 mt-4">
            <Link className="block" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="block" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link className="block" href="#">
              <YoutubeIcon className="h-6 w-6" />
            </Link>
            <Link className="block" href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link className="block" href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link className="block" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                About us
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Careers
                <Badge variant="secondary" className="bg-[#ffeb3b]">We&apos;re not hiring</Badge>
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Glossary
              </Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Misc</h3>
          <ul>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Frequently Asked Questions
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Terms and Conditions
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Payment Guidelines and T&C
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Cashback Terms and Conditions
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Medibuddy Terms and Conditions
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Tap ‘N’ Go Loads Terms and Conditions
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Business Loans Terms and Conditions
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:text-gray-300" href="#">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Transport Nagar</h3>
          <p>Sanjay Gandhi</p>
        </div> */}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-sm">© 2023 SpiceAuction. All rights reserved.</p>
        <div className="flex space-x-4">
          
          
        </div>
      </div>
    </footer>
  )
}


function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function YoutubeIcon(props: any) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}


function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function MessageCircleIcon(props: any) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}
