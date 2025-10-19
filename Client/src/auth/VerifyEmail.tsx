import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React, { useState } from "react"

const VerifyEmail = () => {

  const [otp,setOtp] = useState<string[]>(["","","","","",""]);
  const inputRef = React.useRef<any>([]);
  const loader = false;

  const handleChange = (index:number, value:string) => {
    if(/^[a-zA-Z0-9]$/.test(value) || value === ""){
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if(value!= "" && index < 5){
        inputRef.current[index+1].focus();
      }
    }
  }

  // const handlePaste = (e: any) => {
  //   const paste = e.clipboardData.getData('text');
  //   const pasteArray = paste.split('');
  //   pasteArray.array.forEach((char:string, index:number) => {
  //     if(inputRef.current[index]){
  //       inputRef.current[index].value = char;
  //     }
  //   });
  // }

  const handleKeyDown = (index:number , e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Backspace' && !otp[index] && index > 0){
      inputRef.current[index-1].focus();
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
        <div className="flex flex-col gap-5 md:p-8 rounded-lg w-full max-w-md md:border md:bg-gray-200">
            <div className="text-center">
                <h1 className="font-extrabold text-2xl">Verify your email</h1>
                <p className="text-gray-600 text-sm mt-2">Enter 6 digit code send to your email address</p>
            </div>
            <form action="">
              <div className="flex justify-between">
                {
                  otp.map((letter:string, idx:number) => (
                    <Input
                    key={idx}
                    ref={(element) => (inputRef.current[idx] = element)}
                    value={letter}
                    type="text"
                    maxLength={1}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(idx,e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    // onPaste={handlePaste}
                    className="md:w-12 md:h-12 w-10 h-10 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg
                    focus:outline-none focus:ring-2 border-gray-600"
                    />
                  ))
                }
              </div>
              {
                loader ? (
                  <Button className="mt-6 w-full">
                    <Loader2
                    className="mr-2 w-4 h-4 animate-spin"
                    />Verifying Email
                  </Button>
                ) : (
                    <Button className="mt-6 w-full">
                      Verify Email
                    </Button>
                )
              }
            </form>
        </div>
    </div>
  )
}

export default VerifyEmail