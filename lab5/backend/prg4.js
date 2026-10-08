import express from "express";
import { products } from "./data";
const app = express();

// return name, image , price of all products
app.get("/api/products", (res, req) => {
  // let sortedProducts = products.map(({ name, image, price, id }) => ({
  //   name,
  //   image,
  //   price,
  //   id,
  // }));
  let sortedProducts = products.map(
    ({ description, reviews, ...rest }) => rest,
  );

  res.status(200).json({ count: sortedProducts.length, data: sortedProducts });
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found </h1>");
});
app.listen(4445, () => console.log("prg3 is running at 4445"));
