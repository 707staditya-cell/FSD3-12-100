import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addToCart = async (product) => {
  const myCart = await getCart();
  const isFound = myCart.find((item) => item.id === product.id);
  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }
  await saveCart(myCart);
  console.log(`Product added/updated with id ${product.id} into cart`);
};

const showCart = async () => {
  const data = await getCart();
  console.table(data);
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Flipkart 🤸");
    console.log("1.......... Show cart");
    console.log("2.......... Add Product");
    console.log("3.......... Remove Product");
    console.log("4.......... Update Quantity");
    console.log("5.......... Checkout");
    choice = await cin.question("Enter your choice:");
    switch (Number(choice)) {
      case 1:
        await showCart();
        break;
      case 2:
        let data = await cin.question("Enter id,name,price,qty:");
        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());
        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };
        await addToCart(product);

        break;
      case 3:
        console.log("Remove product from cart");
        let removeId = await cin.question("Enter product id to remove:");
        const myCart = await getCart();
        const index = myCart.findIndex((item) => item.id === Number(removeId));
        if (index !== -1) {
          myCart.splice(index, 1);
          await saveCart(myCart);
          console.log(`Product with id ${removeId} removed from cart`);
        } else {
          console.log(`Product with id ${removeId} not found in cart`);
        }
        break;
      case 4:
        console.log("Update product quantity in cart");
        let updateData = await cin.question(
          "Enter product id and new quantity (id,qty):",
        );
        const [updateId, newQty] = updateData
          .split(",")
          .map((item) => item.trim());
        const cart = await getCart();
        const productToUpdate = cart.find(
          (item) => item.id === Number(updateId),
        );
        if (productToUpdate) {
          productToUpdate.qty = Number(newQty);
          await saveCart(cart);
          console.log(
            `Product with id ${updateId} updated to quantity ${newQty}`,
          );
        } else {
          console.log(`Product with id ${updateId} not found in cart`);
        }
        break;
      case 5:
        console.log("See you later");
        break;
      default:
        console.log("Invalid choice! try again 🛑");
    }
  } while (choice != 5);
  cin.close();
};

main();
