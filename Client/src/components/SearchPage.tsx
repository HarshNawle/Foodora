// import { useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { GlobeIcon, MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroImage from "../assets/hero-section-img.jpg";
import { Link } from "react-router-dom";

const SearchPage = () => {
  // const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
        <div className="flex-1">
          {/* Search Input Field */}
          <div className="flex gap-2 items-center">
            <Input
              type="text"
              value={searchQuery}
              placeholder="Search by restaurant & cuisines"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button>Search</Button>
          </div>
          <div>
            {/* Search Items displayed here */}
            <div className="flex flex-col my-3 gap-3 md:flex-row md:items-center md:gap-2">
              <h1 className="text-lg font-medium">(2) Search result found</h1>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {["Biryani", "Momos", "Pizza"].map(
                  (selectedFilter: string, idx: number) => (
                    <div
                      key={idx}
                      className="relative inline-flex items-center max-w-full"
                    >
                      <Badge
                        variant={"outline"}
                        className="rounded-md cursor-pointer pr-6"
                      >
                        {selectedFilter}
                      </Badge>
                      <X
                        size={16}
                        className="absolute right-1 cursor-pointer top-1"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Restaurant Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item: number, idx: number) => (
                <Card key={idx}
                className=" dark:bg-gray-800 bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <AspectRatio ratio={16 / 6}>
                      <img
                        src={HeroImage}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>

                    <div className="absolute top-2 left-4 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg py-1 px-3">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Pizza Hunt
                    </h1>
                    <div className="mt-2 flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <p>
                        City: <span className="font-medium">Chandrapur</span>
                      </p>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <GlobeIcon size={16} />
                      <p>
                        Country: <span className="font-medium">India</span>
                      </p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {["Biryani", "Momos", "Pizza"].map(
                        (cuisine: string, idx: number) => (
                          <div
                            key={idx}
                            className="relative inline-flex items-center max-w-full"
                          >
                            <Badge className="rounded-md cursor-pointer">
                              {cuisine}
                            </Badge>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 border-t-gray-100 dark:border-t-gray-700 text-white flex justify-end">
                    <Link to={`/restaurant/${123}`}>
                      <Button className="font-semibold cursor-pointer py-2 px-4 rounded-full shadow-md transition-colors duration-200">
                        View Menus
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
