'use client'
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function InputBox({
  label,
  placeholder,
  icon: Icon,
  type
}: {
  label: string,
  placeholder: string,
  icon: any,
  type: string
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isPassword = type === 'password';

  return (
    <div className="flex flex-col w-full mb-4 px-4 sm:px-8">
      <label className="text-xs font-medium text-gray-500 mb-1">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type={isPassword && !isPasswordVisible ? 'password' : 'text'}
          placeholder={placeholder}
          className="font-light rounded-md border-2 w-full p-2 pl-10 pr-10"
        />
        {isPassword && (
          <button 
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <EyeOffIcon className="h-5 w-5 text-sky-800" />
            ) : (
              <EyeIcon className="h-5 w-5 text-sky-800" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}