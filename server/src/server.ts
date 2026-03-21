import express, { Express, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes"; // ✅ add this
dotenv.config();
const app: Express = express();

app.use(express.json());

const corsOption: CorsOptions = {
  origin:[
 "http://localhost:5173",
   "https://dipnext.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOption));
app.use('/images', express.static('public/images'));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/api/products", productRoutes);

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`servers is running on http://localhost:${PORT}`);
});
