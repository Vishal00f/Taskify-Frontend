'use client'
import { LoaderPinwheel } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BrandLogo(){
    const router=useRouter()
    return (
        <div className="flex flex-col cursor-pointer" onClick={()=>router.replace('/')}>
            <div className="flex flex-row text-2xl gap-2">
                    <span className="">
                    <LoaderPinwheel color="#471273" strokeWidth={2.23} size={30}/>
                    </span>
                    <span className="font-bold font-sans">Workshire</span>
            </div>
            <span className="text-sm font-sans font-semibold text-gray-600">Ultimate app for work</span>
        </div>
    )
}