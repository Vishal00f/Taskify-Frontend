'use client'
import { Lock, Mail, UserRound } from "lucide-react"
import InputBox from "./InputBox"
import GradientButton from "../GradientButton"
import { useRouter } from "next/navigation"


function Signup() {
  const router=useRouter()
  const data = [
    {label:"First Name",placeholder:"John",icon:UserRound,type:"text"},
    {label:"Last Name",placeholder:"Doe",icon:UserRound,type:"text"},
    {label:"Email",placeholder:"example@gmail.com",icon:Mail,type:"email"},
    {label:"Password",placeholder:"Minimum 8 characters",icon:Lock,type:"password"}
  ]
  return (
    <div className="flex flex-col border-2 bg-white items-center rounded-xl sm:w-[460px] w-full p-6 z-50">
    <p className="text-2xl font-bold font-sans mb-6 border-b-4 pb-2">Sign up</p>
    <div className="w-full">
      {data.map((item)=>(
        <InputBox key={item.label} label={item.label} placeholder={item.placeholder} icon={item.icon} type={item.type}/>
      ))}
      <GradientButton text='Register now' onClick={()=>router.replace('/')} size="full" withArrow={false} />
    </div>
  </div>

  )
}

export default Signup