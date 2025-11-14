import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connectDB";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser = require("cookie-parser");
import userRoute from "./routes/user_routes";
import restaurantRoute from "./routes/restaurant_routes";
import menuRoute from "./routes/menu_routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware used in most of the project
app.use(bodyParser.json({limit:'10mb'}));
app.use(express.urlencoded({ extended: true , limit:'10mb'}));
app.use(cookieParser());
app.use(express.json());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
}
app.use(cors(corsOption));

//API endpoints
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoute);
app.use("/api/v1/menu", menuRoute);


// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
