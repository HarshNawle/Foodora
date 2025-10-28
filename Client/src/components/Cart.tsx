import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage";

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant="link">Clear All</Button>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>HN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>Chole Bhature</TableCell>
            <TableCell>₹ 80</TableCell>
            <TableCell>
              <div className="w-fit flex items-center rounded-full border border-gray-100 dark:bg-gray-800 shadow-md">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-full bg-gray-200"
                >
                  <Minus />
                </Button>
                <Button
                  disabled
                  variant={"link"}
                  size={"icon"}
                  className="font-bold rounded-full"
                >
                  1
                </Button>
                <Button size={"icon"} className="rounded-full">
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell>₹ 80</TableCell>
            <TableCell className="text-right">
              <Button>Remove</Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">₹ 80</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-end mt-3">
        <Button onClick={() => setOpen(true)}>Proceed To Checkout</Button>
      </div>
      <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;
