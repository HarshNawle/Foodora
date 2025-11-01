import { IndianRupee } from "lucide-react";
import ordermenu from "../assets/ordermenu.jpg";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const SuccessPage = () => {
  const order = [1, 2, 3];
  if (order.length == 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
          No Order Found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Order Status:{" "}
            <span className="text-[#FF5A5A]">{"confirm".toUpperCase()}</span>
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Order Summary
          </h2>
          {/* Your Order Items is dsipalyed here */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={ordermenu}
                  alt=""
                  className="w-14 h-14 object-cover rounded-md"
                />
                <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                  Pakora
                </h3>
              </div>
              <div className="text-right ">
                <div className="text-gray-800 dark:text-gray-200 flex items-center">
                  <IndianRupee />
                  <span className="text-2xl font-medium">30</span>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
          </div>
        </div>
        <Link to={'/cart'}>
          <Button className="w-full p-3 rounded-md shadow-lg">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
