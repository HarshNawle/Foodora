import { Request, Response } from "express";
import { Restaurant } from "../models/restaurant_model";
import  Multer  from "multer";

export const createRestaurant = async (req:Request, res:Response) => {
    try {
        const { restaurantName, city, country, price, deliveryTime, cuisines } = req.body;
        const file = req.file;


        //Find restaurant
        const restaurant = await Restaurant.findOne({user:req.id});
        if(restaurant){
            return res.status(400).json({
                success:false,
                message: "Restaurant already exist for this user"
            })
        }

        if(!file){
            return res.status(400).json({
                success:false,
                message:"Image is required"
            });
        }

        const imageURL = await uploadImageOnCloudinary(file as Express.Multer.File);

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}