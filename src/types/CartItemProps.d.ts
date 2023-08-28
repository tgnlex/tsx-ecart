import CartItemType from './CartItemType';
type CartItemProps = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;

}
export default CartItemProps;