import CartItemType from './CartItemType';
type CartProps = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

export default CartProps;