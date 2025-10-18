import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom";

const  ForgotPassword = () => {

    const [email,setEmail] = useState<string>("");

    const loader = false;

    return(
        <div className="flex items-center justify-center min-h-screen w-full ">
            <form className=" flex flex-col gap-5 md:p-8 rounded-lg w-full max-w-md md:border md:bg-gray-200">
                <div className="text-center">
                    <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
                    <p className="text-gray-600 text-sm">
                        Enter your email address to reset your password
                    </p>
                    <div className="relative w-full mt-3">
                        <Input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="pl-11 focus-visible:ring-2"
                        />
                        <Mail className="absolute inset-y-2 left-2"/>
                    </div>
                    {
                        loader ? (
                            <Button disabled>
                                <Loader2 className="mr-2 w-4 h-4 animate-spin "/>
                                Please wait
                            </Button>
                        ) : (
                            <Button className="mt-5 w-full">Send Reset Link</Button>
                        )
                    }
                    <p className="mt-3">
                        Back to <Link to="/login" className="text-blue-600">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword