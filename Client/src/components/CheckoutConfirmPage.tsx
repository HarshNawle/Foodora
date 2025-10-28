import { DialogTitle } from "@radix-ui/react-dialog";
import React, {
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const checkoutHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //API implementation
    console.log(input);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle className="font-medium">Order Details</DialogTitle>
        <DialogDescription className="text-1xs">
          Please review your delivery details carefully. Once you’re sure
          everything is correct, click Confirm to place your order.
        </DialogDescription>
        <form
          onSubmit={checkoutHandler}
          className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0"
        >
          <div className="mt-5">
            <Label>Fullname</Label>
            <Input
              className="mt-2"
              onChange={changeHandler}
              type="text"
              name="name"
              value={input.name}
            />
          </div>
          <div className="mt-5">
            <Label>Email</Label>
            <Input
              className="mt-2"
              onChange={changeHandler}
              type="email"
              name="email"
              value={input.email}
            />
          </div>
          <div className="mt-5">
            <Label>Contact</Label>
            <Input
              className="mt-2"
              onChange={changeHandler}
              type="text"
              name="contact"
              value={input.contact}
            />
          </div>
          <div className="mt-5">
            <Label>Address</Label>
            <Input
              className="mt-2"
              onChange={changeHandler}
              type="text"
              name="address"
              value={input.address}
            />
          </div>
          <div className="mt-5">
            <Label>City</Label>
            <Input
              className="mt-2"
              onChange={changeHandler}
              type="text"
              name="city"
              value={input.city}
            />
          </div>
          <div className="mt-5">
            <Label>Country</Label>
            <Input
              className="mt-2"
              onChange={changeHandler}
              type="text"
              name="country"
              value={input.country}
            />
          </div>
          <DialogFooter className="col-span-2 pt-5">
            <Button>Continue To Payment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
