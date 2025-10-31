import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { restaurantFromSchema, type RestaurantFromSchema } from "@/schema/restaurantSchema";
import { Loader2 } from "lucide-react";
import { useState} from "react";
import { Link } from "react-router-dom";

const AdminRestaurant = () => {
  const loading = false;
  const restaurantHai = false;
  
  const [input, setInput] = useState<RestaurantFromSchema>({
    name: "",
    city: "",
    country: "",
    estTime: 0,
    cuisines: [],
    imageFile: undefined,
  });

  const [error, setError] = useState<Partial<RestaurantFromSchema>>({});

  const changeEventHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({...input, [name]: type == 'number' ? Number(value) : value});
  };

  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = restaurantFromSchema.safeParse(input);
    if(!result.success){
      const fieldErrors = result.error.flatten().fieldErrors;
      setError(fieldErrors as Partial<RestaurantFromSchema>);
      return;
    }
    // Add Restaurant API implementation start from here :-

    console.log(input);
  }


  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl">Add Restaurants</h1>
          <form action="" onSubmit={submitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0 mt-4">
              {/* Restaurant Name */}
              <div>
                <Label>Restaurant Name</Label>
                <Input
                  onChange={changeEventHandler}
                  className="mt-3"
                  type="text"
                  name="name"
                  placeholder="Enter your restaurant name"
                  value={input.name}
                /> {error && <span className="text-red-500 text-xs font-medium">{error.name}</span>}
              </div>
              <div>
                <Label>City</Label>
                <Input
                  onChange={changeEventHandler}
                  className="mt-3"
                  type="text"
                  name="city"
                  placeholder="Enter your city name"
                  value={input.city}
                /> {error && <span className="text-red-500 text-xs font-medium">{error.city}</span>}
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  onChange={changeEventHandler}
                  className="mt-3"
                  type="text"
                  name="country"
                  placeholder="Enter your country name"
                  value={input.country}
                /> {error && <span className="text-red-500 text-xs font-medium">{error.country}</span>}
              </div>
              <div>
                <Label>Estimated Delivery Time (minutes) </Label>
                <Input
                  onChange={changeEventHandler}
                  className="mt-3"
                  type="number"
                  name="estTime"
                  value={input.estTime}
                /> {error && <span className="text-red-500 text-xs font-medium">{error.estTime}</span>}
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  onChange={(e) => setInput({...input, cuisines:e.target.value.split(",")})}
                  className="mt-3"
                  type="text"
                  name="cuisines"
                  placeholder="e.g. Italian, Chinese, Indian"
                  value={input.cuisines}
                /> {error && <span className="text-red-500 text-xs font-medium">{error.cuisines}</span>}
              </div>
              <div>
                <Label>Upload Image</Label>
                <Input
                  className="mt-3"
                  accept="image/*"
                  type="file"
                  name="imageFile"
                  onChange={(e) => setInput({...input, imageFile: e.target.files?.[0] || undefined})}
                /> {error && <span className="text-red-500 text-xs font-medium">
                  {error.imageFile?.name || "* Image file is required"}</span>}
              </div>
            </div>
            <div className="my-5 w-fit">
              <Link to={'/admin/add-menu'}>
                  {loading ? (
                <Button>
                  <Loader2 className=" animate-spin"/>Processing
                </Button>
              ) : (
                <Button>{
                    restaurantHai ? "Update Your Restaurant" :
                    "Add Your Restaurant"
                  } </Button>
              )}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRestaurant;
