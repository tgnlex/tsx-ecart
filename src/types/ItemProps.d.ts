import CartItemType from './CartItemType'
type ItemProps = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void; 
  }

export default ItemProps;