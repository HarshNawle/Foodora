import express from 'express';
import { createRestaurant, getReataurant, getRestaurantOrder, getSingleRestaurant, searchRestaurant, updateRestaurant } from '../controller/restaurant_controller';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import upload from '../middlewares/multer';

const router = express.Router();

router.route("/").post(isAuthenticated , upload.single("imageFile"), createRestaurant);
router.route("/").get(isAuthenticated , getReataurant);
router.route("/").put(isAuthenticated , upload.single("imageFile"), updateRestaurant);
router.route("/order").get(isAuthenticated , getRestaurantOrder);
router.route("/order/:orderId/status").put(isAuthenticated , updateRestaurant);
router.route("/search/:searchText").get(isAuthenticated , searchRestaurant);
router.route("/:id").get(isAuthenticated , getSingleRestaurant);

export default router