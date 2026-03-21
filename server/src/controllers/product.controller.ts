import { Request, Response } from 'express';

// Dummy data (for now)

export let products = [
  {  id: 1,
      name: "Nike Air Jordan-01",
      price: "$200.20",
      images: "/images/shoe4.svg"
  },
  {   id: 2,
      name: "Nike Air Jordan-10",
      price: "$210.20",
      images: "/images/shoe5.svg"
  },
  {
    id: 3,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    images: "/images/shoe6.svg",
  },
  {
    id: 4,
    name: "Nike Air Jordan-001",
    price: "$250.40",
    images: "/images/shoe7.svg",
  },
   {
    id: 5,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    images: "/images/shoe4.svg",
  },
  {
    id: 6,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    images: "/images/shoe5.svg",
  },
  {
    id: 7,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    images: "/images/shoe6.svg",
  },
  {
    id: 8,
    name: "Nike Air Jordan-001",
    price: "$250.40",
    images: "/images/shoe7.svg",
  },
];

// GET all
export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

// GET one
export const getSingleProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// POST create
export const createProduct = (req: Request, res: Response) => {
  const newProduct = {
    id: Date.now(),
    ...req.body
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

// PUT update
export const updateProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = { ...products[index], ...req.body };

  res.json(products[index]);
};

// DELETE
export const deleteProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);

  res.json({ message: "Product deleted" });
};