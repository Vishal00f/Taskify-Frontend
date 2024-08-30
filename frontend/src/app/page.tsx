"use client"
import GradientButton from "@/components/GradientButton";
import LandingNavbar from "@/components/LandingNavbar";
import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter()
  return (
    <div className="min-h-screen  ">
      <LandingNavbar />
      <div className="flex justify-center flex-col items-center  mt-32 px-2">
        <div className="max-w-2xl text-center ">
          <h1 className=" text-4xl sm:text-6xl font-poppins font-black">The ultimate platform, for work</h1>
        </div>
      <p className="max-w-[29.5rem] text-xl text-center mt-5 text-gray-800 "><span className="font-bold ">Bring all your team's work together in </span><span className="font-medium">one powerful, all-in-one platform</span>  </p>
      <div className="mt-12">
        <GradientButton text="Get started, its free" onClick={()=>router.push('/auth/sign-up')} size="large" />
      </div>
      </div>
    </div>
  );
}