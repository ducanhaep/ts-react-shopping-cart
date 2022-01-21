import { useState } from "react";
import { useQuery } from "react-query";

// Components
import Drawer from "@material-ui/core/Drawer";

// Styles
import { Wrapper } from "./App.styles";
import { LinearProgress } from "@material-ui/core";

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) {
    return <LinearProgress />;
  }
  if (error) {
    return <div>Something went wrong ...</div>;
  }
  return <div className="App">App</div>;
};

export default App;
