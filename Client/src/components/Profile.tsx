import { Loader2, LocateIcon, Mail, MapPin, MapPinnedIcon, PlusCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React, { useRef, useState, type FormEvent } from "react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

const Profile = () => {

  const loader = false;

  const imageRef = useRef<HTMLInputElement | null>(null);

  const [selectedProfilePicture, setSelectedProfilePicture] =
    useState<string>("");

  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update profile API Implementation 

  };

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            <AvatarImage src={selectedProfilePicture} />
            <AvatarFallback className="text-2xl md:text-5xl">HN</AvatarFallback>
            <input
              type="file"
              className="hidden"
              ref={imageRef}
              accept="image/*"
              onChange={fileChangeHandler}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-200 transition-opacity duration-300 bg-gray-200 rounded-full cursor-pointer"
            >
              <PlusCircle className="text-gray-500 w-8 h-8" />
            </div>
          </Avatar>
          <Input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={handleChanges}
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input type="email" 
            name="email"
            value={profileData.email}
            onChange={handleChanges}
            className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent border-none"/>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <LocateIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input type="text" 
            name="address"
            value={profileData.address}
            onChange={handleChanges}
            className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent border-none"/>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input type="text" 
            name="city"
            value={profileData.city}
            onChange={handleChanges}
            className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent border-none"/>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinnedIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Country</Label>
            <input type="text" 
            name="country"
            value={profileData.country}
            onChange={handleChanges}
            className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent border-none"/>
          </div>
        </div>
      </div>
      <div className="text-center">
        {
          loader ? (
            <Button><Loader2 className="mr-2 w-4 h-4 animate-spin"/>Please wait</Button>
          ) : (
            <Button>Update</Button>
          )
        }
      </div>
    </form>
  );
};

export default Profile;
