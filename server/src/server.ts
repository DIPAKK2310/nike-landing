import express, { Express, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index";
import productRoutes from "./routes/product.routes"; // ✅ add this
// 1. Import the necessary modules and types from Express, CORS, and dotenv.
dotenv.config(); //2 Load environment variables from a .env file into process.env.
const app: Express = express(); //3. Create an instance of an Express application and assign it to the variable app.

app.use(express.json()); //4. Use the express.json() middleware to parse incoming JSON requests and make the data available in req.body.

const corsOption: CorsOptions = {
  origin:[
 "http://localhost:5173",
   "https://nike-landing-vert-nine.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}; //5. Define a CORS options object that specifies the allowed origins, HTTP methods, and credentials for cross-origin requests.
app.use(cors(corsOption)); //6. Use the cors middleware with the defined options to enable CORS for the Express application.
app.use('/images', express.static('public/images')); //7. Serve static files from the public/images directory when requests are made to the /images route.

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
}); //8. Define a route handler for the root URL ("/") that sends a "Hello World" response when accessed.

app.use("/api/products", productRoutes); //9. Use the productRoutes middleware for any requests that start with /api/products. This means that any routes defined in the productRoutes module will be accessible under the /api/products path.

const PORT: number = Number(process.env.PORT) || 5000; //10. Define a constant PORT that retrieves the port number from the environment variables (process.env.PORT) or defaults to 5000 if the environment variable is not set.

connectDB().then(() =>{
  console.log("✅DataBase connected successfully")
  app.listen(PORT, () => {
    console.log(`servers is running on http://localhost:${PORT}`);
  });
}

).catch((err) => {
  console.error("❌Failed to connect to the database:", err);
  process.exit(1); // Exit the application with a failure code
}) //12. Call the connectDB function again to ensure that the database connection is established before starting the server. If the connection is successful, the server will start listening on the specified PORT. If there is an error connecting to the database, it will log the error and exit the application with a failure code.

