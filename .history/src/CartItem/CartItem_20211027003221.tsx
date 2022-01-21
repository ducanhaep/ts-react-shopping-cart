// Styles
import { Wrapper } from "./CartItem.styles";
// Types
import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC = () => <div>Cart item</div>;

export default CartItem;
