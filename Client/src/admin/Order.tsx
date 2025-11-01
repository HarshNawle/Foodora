import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Order = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-6">
      <h1 className="text-3xl text-gray-900 font-extrabold">Order Overview</h1>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border-gray-200 dark:border-gray-700">
          <div className="flex-1 mb-6 sm:mb-0">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Restaurant Name
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-semibold">Address: </span>Restaurant Address
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-semibold">Total Amount: </span>Order Price
            </p>
          </div>
          <div className="w-full sm:w-1/3">
            <Label className="text-sm block mb-2 text-gray-700 dark:text-gray-300">
              Order Status
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[
                    "Pending",
                    "Preparing",
                    "Confirmed",
                    "OutForDelivery",
                    "Delivered",
                  ].map((status: string, index: number) => (
                    <SelectItem value={status.toLowerCase()} key={index}>
                      {status}
                    </SelectItem>
                  ))};
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
