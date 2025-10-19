import { useState } from "react";
import { Input } from "./ui/input";

const HeroSection = () => {

    const [searchText, setSearchText] = useState('');
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
            <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">Order Food anytime & anywhere</h1>
            <p className="text-gray-500">Hey! Our Delicious food is waiting for you, we are always near to you.</p>
        </div>
        <div className="realtive">
            <Input
            value={searchText}
            type="text"
            onChange={(e) => setSearchText(e.target.value)}/>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
