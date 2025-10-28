import { Card, CardContent, CardFooter } from "./ui/card";
import menuimg from "../assets/menu1.jpg";
import { Button } from "./ui/button";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menus
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className=" -p-0 max-w-[75%] mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src={menuimg}
            alt="menu-1"
            className="w-full h-60 object-cover"
          />
          <CardContent className="p-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Chole Bhature
            </h1>
            <p className="text-sm text-gray-600">
              Bestest Best Chole Bhature in New Delhi! Must Visit if you are in
              Delhi, because...
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-gray-500">₹80</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="w-full cursor-pointer -mt-8">Add to Cart</Button>
          </CardFooter> 
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
