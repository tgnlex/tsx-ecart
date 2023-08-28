// Components
import CartItem from './CartItem'
// Styled Components
import {Wrapper} from './styled/CartWrapper.styles.ts'
// Types
import CartProps from '../types/CartProps';
const Cart: React.FC<CartProps> = ({cartItems, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
        <h2>My Cart</h2>
        {
          cartItems.length === 0  ? 
          <p>No items in cart</p> : 
          null 
        } 
        {cartItems.map(item => (
          <CartItem 
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
    </Wrapper>
  )
}

export default Cart
