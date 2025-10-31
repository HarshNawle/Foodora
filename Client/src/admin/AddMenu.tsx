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
import EditMenu from "./EditMenu";
import { menuFormSchema, type MenuFromSchema } from "@/schema/menuSchema";

const menus = [
  {
    name: "Vada Pav",
    description:
      "Vada Pav is a favorite sandwich-style snack from Mumbai, named after its ingredients: vada, or spicy mashed potatoes, which are deep-fried in chickpea batter; and pav, or white bread rolls.",
    price: "₹15",
    imageFile:
      "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661887113/indian-food/indian-food-1120x732.jpg",
  },
  {
    name: "Vada Pav",
    description:
      "Vada Pav is a favorite sandwich-style snack from Mumbai, named after its ingredients: vada, or spicy mashed potatoes, which are deep-fried in chickpea batter; and pav, or white bread rolls.",
    price: "₹15",
    imageFile:
      "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661887113/indian-food/indian-food-1120x732.jpg",
  },
];

const AddMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<MenuFromSchema>({
    name: "",
    description: "",
    price: 0,
    imageFile: undefined,
  });
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const loading = false;

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

  const [editOpen, setEditOpen] = useState<boolean>(false);

  return (
    <div className="max-w-6xl  mx-auto my-10">
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
                  />{" "}
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
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {menus.map((menu: any, idx: number) => (
        <div className="mt-6 space-y-4" key={idx}>
          <div className="flex flex-col md:flex-row md:items-center md:p-4 md:space-x-4 p-2 shadow-md rounded-lg border">
            <img
              src={menu.imageFile}
              alt=""
              className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                {menu.name}
              </h1>
              <p className="text-sm mt-1 text-gray-600">{menu.description}</p>
              <h1 className="font-semibold mt-2">
                Price: <span>{menu.price}</span>
              </h1>
            </div>
            <Button
              onClick={() => {
                setSelectedMenu(menu);
                setEditOpen(true);
              }}
              className="mt-2"
              size={"sm"}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
      <EditMenu
        selectedMenu={selectedMenu}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
      />
    </div>
  );
};

export default AddMenu;
