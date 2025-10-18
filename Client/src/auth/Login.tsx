import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { userLoginSchema, type LoginInputState } from '@/schema/userSchema';
import { Separator } from '@radix-ui/react-separator';
import { Loader2, LockKeyhole, Mail } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const [input, setInput] = useState<LoginInputState>({
        email: '',
        password: '',
    });

    const [errors,setErrors] = useState<Partial<LoginInputState>>({});

    const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({...input, [name]: value});
    }

    const loginSubmit = (e:FormEvent) => {
        e.preventDefault();
        //form validation check
        const result = userLoginSchema.safeParse(input);
        if(!result.success){
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors(fieldErrors as Partial<LoginInputState>);
            return;
        }
        console.log(input);
    }

    const loader = false;
    return (
        <div className='flex items-center justify-center min-h-screen text-center'>
            <form onSubmit={loginSubmit} className="w-full max-w-md rounded-lg md:border md:bg-gray-200 mx-4 md:p-8 text-center">
                <div className='mb-4'>
                    <h1 className='text-2xl font-bold text-center'>Foodora</h1>
                </div>
                <div className='relative mb-3'>
                    <Input type='email' placeholder='Email' className='pl-11 focus-visible:ring-2' 
                    value={input.email} onChange={changeEventHandler} name='email'/>
                    <Mail className='absolute inset-y-0 top-1.5 left-2 text-gray-500' />
                    { errors && <span className='text-sm text-red-500'>{errors.email}</span> }
                </div>
                <div className='relative'>
                    <Input type='password' placeholder='Password' className='pl-11 focus-visible:ring-2' 
                    value={input.password} onChange={changeEventHandler} name='password'/>
                    <LockKeyhole className='absolute inset-y-0 top-1.5 left-2 text-gray-500' />
                    { errors && <span className='text-sm text-red-500'>{errors.password}</span> }
                </div>

                <div className='mt-8'>
                    {
                        loader ? (
                            <Button disabled className='w-full'><Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please wait</Button>
                        )
                        :(<Button type="submit" className='w-full'>Login</Button>)
                    }
                    <div className='mt-3'>
                        <Link to="/forgotpassword" className='hover:text-blue-500 hover:underline'>Forgot Password</Link>
                    </div>
                </div>
                <Separator className='my-4 bg-black'/>
                <p className='mt-1'>
                    Don't have an account?{" "}
                    <Link to="/signup" className='text-blue-500'>Signup</Link> 
                </p>

            </form>
        </div>
    )
}

export default Login