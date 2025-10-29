import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";

const AddMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const loading = false;
  return (
    <div className="mx-w-6xl  mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menu
        </h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button>
              <Plus className="mr-2" />
              Add Menus
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Menu</DialogTitle>
              <DialogDescription>
                Create a menu that will make your restaurant stand out
              </DialogDescription>
              <form action="" className="space-y-4">
                <div className="mt-2">
                  <Label>Menu Name</Label>
                  <Input
                    className="mt-2"
                    type="text"
                    name="name"
                    placeholder="Enter menu name"
                  />
                </div>
                <div className="mt-2">
                  <Label>Description</Label>
                  <Input
                    className="mt-2"
                    type="text"
                    name="description"
                    placeholder="Enter menu description"
                  />
                </div>
                <div className="mt-2">
                  <Label>Price (in Rupees)</Label>
                  <Input
                    className="mt-2"
                    type="text"
                    name="price"
                    placeholder="Enter menu price"
                  />
                </div>
                <div className="mt-2">
                  <Label>Upload menu image</Label>
                  <Input className="mt-2" type="file" name="imageFile" />
                </div>
                <DialogFooter className="mt-5">
                  {loading ? (
                    <Button disabled>
                      {" "}
                      <Loader2 className="animate-spin" /> Please wait
                    </Button>
                  ) : (
                    <Button>Submit</Button>
                  )}
                </DialogFooter>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddMenu;
