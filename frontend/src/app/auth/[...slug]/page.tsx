"use client"
import Background from "@/components/Background"
import BrandLogo from "@/components/BrandLogo"
import GradientButton from "@/components/GradientButton"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Signup from "@/components/authpage/Signup"


export default function AuthPage({ params }: {
    params: {
        slug: string[]
    }
}) {
    const [buttonName, setButtonName] = useState('')
    const path = params.slug[0]
    const router = useRouter()
    useEffect(() => {
        if (params.slug[0] === 'login') {
            setButtonName('Sign up')
        }
        else {
            setButtonName('Login')
        }
    }, [])
    const handleClick = () => {
        if (buttonName === 'Login') {
            router.replace('/auth/login')
        }
        else {
            router.replace('/auth/sign-up')
        }
    }
    return (
        <Background>
            <div className="min-h-screen ">
                <div className="flex justify-between pt-4 px-3">
                    <div className="sm:pl-8 ">
                        <BrandLogo />
                    </div>
                    <div className="flex gap-x-4">
                        <span className="font-sans font-semibold my-auto text-gray-600 hidden sm:flex">{path === 'login' ? "Don't have an account" : 'Already a User?'}</span>
                        <GradientButton text={buttonName} onClick={handleClick} withArrow={false} />
                    </div>
                </div>
                <div className="container flex justify-center items-center mx-auto mt-12 px-6 "> 
                    <Signup />
                </div>
            </div>
        </Background>
    )
}