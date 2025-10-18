
const VerifyEmail = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
        <div className="flex flex-col gap-5 md:p-8 rounded-lg w-full max-w-md md:border md:bg-gray-200">
            <div className="text-center">
                <h1 className="font-extrabold text-2xl">Verify your email</h1>
                <p className="text-gray-600 text-sm mt-2">Enter 6 digit code send to your email address</p>
            </div>
        </div>
    </div>
  )
}

export default VerifyEmail