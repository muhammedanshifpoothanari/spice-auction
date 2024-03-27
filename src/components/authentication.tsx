'use client'
import { toast } from "./ui/use-toast"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import AuthObservable from "./hooks/auth"
import { CreateUser, UserLogin } from "@/lib/actions/login"
import { useDispatch } from "react-redux"
import { setAuthReducer } from "@/redux/auth/authSlice"
import { useRouter } from "next/navigation"



export default function Authentication() {
  const [type, setType] = useState('login');
  const setter = (value: string) => {
      setType(value);
      console.log('setted at authentication');
      
  }
 
    useEffect(() => {
      AuthObservable.subscribe(setter);

      () => AuthObservable.unsubscribe(setter)
    }, [])
  return (
   type === 'login'?<Login />:<Register />
  )
}


const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch();


   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const submit = async () => {
    
    if (
      email.trim() === '' ||
      password.trim() === '') {
    toast({
     title: "Please fill all the required fields.",
     description: "",
   })
 } else {
  const response = await UserLogin({
     email,
     password,
 })
 
if(!response.error) { 
  dispatch(setAuthReducer({token: response} )) 
 
  toast({
    title: "You Have Succusfully Logged In",
    description: "",
  })
  router.push('/') 
  
} else { toast({
  title: response.error,
  description: "",
})}

 }
}
  
  return (
    <div className="mx-auto max-w-sm space-y-6">
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="m@example.com" required type="email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link className="ml-auto inline-block text-sm underline" href="#">
            Forgot your password?
          </Link>
        </div>
        <Input id="password" required type="password" onChange={e => setPassword(e.target.value.toString())}/>
      </div>
      <Button className="w-full" type="submit" onClick={submit}>
        Login
      </Button>
      <Button className="w-full" variant="outline" onClick={() => AuthObservable.notify('register')}>
        Regiter User
      </Button>
      
    </div>
  </div>
  )
}


const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
 useEffect(() => {
  if(rePassword === password) {
    setPasswordError(false);
  } else {
    setPasswordError(true);
  }
 }, [rePassword])

  const submit = async () => {
    
    if (
      firstName.trim() === ''||
      lastName.trim() === '' ||
      email.trim() === '' ||
      mobileNumber.trim() === '' ||
      password.trim() === '') {
    toast({
     title: "Please fill all the required fields.",
     description: "",
   })
 } else {
  const response = await CreateUser({
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
   })
 
if(!response.error) {  
  toast({
    title: "You Have Succusfully regester",
    description: "",
  })
  AuthObservable.notify('login')
  
} else { toast({
  title: response.error,
  description: "",
})}

 }
}
  return (
    <div className="mx-auto max-w-sm space-y-6">
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">Create an account</h1>
      <p className="text-gray-500 dark:text-gray-400">Enter your credential below to create your
account</p>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
          <Label htmlFor="firstName">FirstName</Label>
          <Input id="firstName" placeholder="Enter Your FirstName" required type="text" onChange={e => setFirstName(e.target.value)} />
      </div>
      <div className="space-y-2">
          <Label htmlFor="lastName">LastName</Label>
          <Input id="lastName" placeholder="Enter Your LastName" required type="text" onChange={e => setLastName(e.target.value)}/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="m@example.com" required type="email" onChange={e => setEmail(e.target.value)}/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="mobile">Mobile</Label>
        <Input id="mobile" placeholder="Enter Your LastName" required type="number" onChange={e => setMobileNumber(e.target.value)}/>
      </div>
      <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" onChange={e => setPassword(e.target.value)}/>
      </div>
      <div className="space-y-2">
          <Label htmlFor="rePassword">Re-Password</Label>
          <Input id="rePassword" required type="password" onChange={e => setRePassword(e.target.value)} />
      </div>
      {passwordError === false?<Button className="w-full" type="submit" onClick={submit}>
        Register
      </Button>:<Button className="w-full bg-red-600" type="submit">
        Register
      </Button>}
      <Link className="inline-block w-full text-center text-sm underline" href="#">
        Forgot your password?
      </Link>
    </div>
  </div>
  )
}
