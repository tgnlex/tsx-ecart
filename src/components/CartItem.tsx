import React from 'react';
// mui components
import Button from '@mui/material/Button';
// types
import CartItemProps from '../types/CartItemProps'
// styled components 
import Wrapper from './styled/CartItemWrapper.styles'

const CartItem: React.FC<CartItemProps> = ({item, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.amount * item.price).toFixed()}</p>
        </div>
        <div className="buttons">
            <Button 
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(item)}
            >
                +
            </Button>
            <Button 
              size="small"
              disableElevation
              variant="contained"
              onClick={() => removeFromCart(item.id)}
            >
                -
            </Button>
            <img src={item.image} alt={item.title} />
        </div>
      </div>
    </Wrapper>
  )
}

export default CartItem;
