import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { menuFormSchema, type MenuFromSchema } from "@/schema/menuSchema";
import { Loader2 } from "lucide-react";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

const EditMenu = ({
  selectedMenu,
  editOpen,
  setEditOpen,
}: {
  selectedMenu: MenuFromSchema;
  editOpen: boolean;
  setEditOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState<MenuFromSchema>({
    name: "",
    description: "",
    price: 0,
    imageFile: undefined,
  });

  useEffect(() => {
    setInput({
      name: selectedMenu?.name || "",
      description: selectedMenu?.description || "",
      price: selectedMenu?.price || 0,
      imageFile: undefined,
    });
  }, [selectedMenu]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type == "number" ? Number(value) : value });
  };

  const [error, setError] = useState<Partial<MenuFromSchema>>({});

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = menuFormSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setError(fieldErrors as Partial<MenuFromSchema>);
      return;
    }
    // Add Restaurant API implementation start from here :-

    console.log(input);
  };

  const loading = false;

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
          <DialogDescription>
            Update your menu to keep offerings fresh and exciting!
          </DialogDescription>
        </DialogHeader>
        <form action="" className="space-y-4" onSubmit={submitHandler}>
          <div className="mt-2">
            <Label>Menu Name</Label>
            <Input
              className="mt-2"
              type="text"
              name="name"
              value={input.name}
              onChange={changeHandler}
              placeholder="Enter menu name"
            />
            {error && (
              <span className="text-red-500 text-xs font-medium">
                {error.name}
              </span>
            )}
          </div>
          <div className="mt-2">
            <Label>Description</Label>
            <Input
              className="mt-2"
              type="text"
              name="description"
              value={input.description}
              onChange={changeHandler}
              placeholder="Enter menu description"
            />
            {error && (
              <span className="text-red-500 text-xs font-medium">
                {error.description}
              </span>
            )}
          </div>
          <div className="mt-2">
            <Label>Price (in Rupees)</Label>
            <Input
              className="mt-2"
              type="number"
              name="price"
              value={input.price}
              onChange={changeHandler}
              placeholder="Enter menu price"
            />
            {error && (
              <span className="text-red-500 text-xs font-medium">
                {error.price}
              </span>
            )}
          </div>
          <div className="mt-2">
            <Label>Upload menu image</Label>
            <Input
              className="mt-2"
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={(e) =>
                setInput({
                  ...input,
                  imageFile: e.target.files?.[0] || undefined,
                })
              }
            />
            {error && (
              <span className="text-red-500 text-xs font-medium">
                {error.imageFile?.name || "* Image file is required"}
              </span>
            )}
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
      </DialogContent>
    </Dialog>
  );
};

export default EditMenu;
