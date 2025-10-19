import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { HandPlatter, Loader2, LucidePackageCheck, Menu, Moon, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const admin = true;
  const loader = false;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">Foodora</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order/status">Order</Link>

            {admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Dashboard</MenubarTrigger>
                  <MenubarContent>
                    <Link to="/admin/restaurant">
                      <MenubarItem>Restaurant</MenubarItem>
                    </Link>
                    <Link to="/admin/menu">
                      <MenubarItem>Menu</MenubarItem>
                    </Link>
                    <Link to="/admin/orders">
                      <MenubarItem>Orders</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>
          <div className="flex items-center gap-5">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Light</DropdownMenuItem>
                  <DropdownMenuItem>Dark</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <Link to="/cart" className="relative cursor-pointer">
                <ShoppingCart />
                <Button
                  size={"icon"}
                  className="absolute -inset-y-3 w-4 h-4 text-xs bg-red-500 hover:bg-red-500 left-3"
                >
                  5
                </Button>
              </Link>
            </div>
            <div>
              <Avatar className="rounded-lg">
                <AvatarImage src="https://github.com/evilrabbit.png" />
                <AvatarFallback>HN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {loader ? (
                <Button>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button>Logout</Button>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  // const user = true;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant="outline"
          className="rounded-full text-black bg-gray-200 hover:bg-gray-400"
        >
          <Menu size={"18"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-6">
          <SheetTitle className="text-xl">Foodora</SheetTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>
        <Separator className="my-2" />
        <SheetDescription className="flex-1 mx-3">
          <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <User/>
            <span>Profile</span>
          </Link>
          <Link to="/order" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <HandPlatter/>
            <span>Order</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <ShoppingCart/>
            <span>Cart (0)</span>
          </Link>
          <Link to="/menu" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <SquareMenu/>
            <span>Menu</span>
          </Link>
          <Link to="/restaurant" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <UtensilsCrossed/>
            <span>Restaurant</span>
          </Link>
          <Link to="/reataurant-orders" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <LucidePackageCheck/>
            <span>Restaurant Orders</span>
          </Link>
        </SheetDescription>
        <SheetFooter className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-3">
            <Avatar>
              <AvatarImage/>
              <AvatarFallback>
                HN
              </AvatarFallback>
            </Avatar>
            <h1 className="font-bold">Harsh Nawle</h1>
          </div>
          <SheetClose asChild>
            <Button type="submit" className="w-full">Logout</Button>
          </SheetClose>
        </SheetFooter>
        
      </SheetContent>
    </Sheet>
  );
};
