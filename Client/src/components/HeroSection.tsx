import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import HeroSectionImg from "@/assets/hero-section-img-removebg-preview.png"
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Unlock Flavor: Search Below!
          </h1>
          <p className="text-gray-500">
            Skip the indecision. Tell us what you want, and 
            we'll bring the magic.
          </p>
        </div>
        <div className="relative w-full flex items-center gap-2">
          <Input
            value={searchText}
            placeholder="Search restaurant by name, city & country"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg"
          />
          <Search className={`absolute inset-y-2 left-2}`}/>
          <Button onClick={() => navigate(`/search/${searchText}`)}>Search</Button>
        </div>
      </div>
      <div>
        <img 
        src={HeroSectionImg} 
        className="object-cover w-full max-h-[500px] rounded-[50%]" />
      </div>
    </div>
  );
};

export default HeroSection;
