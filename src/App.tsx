// Modules and Libraries
import { useState } from 'react';
import { useQuery } from 'react-query';
// Stylesheets
import './styles/App.css'
// MUI Components
import LinearProgress from '@mui/material/LinearProgress'
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import {ShoppingCart, ExitToApp} from '@mui/icons-material';
// React Components
import Item from './components/Item';
import Error from './components/Error';
import Cart from './components/Cart';
// Styled Components
import Wrapper from './components/styled/MainWrapper.styles.ts';
import CartButton from './components/styled/CartButton.styles.ts'
import ExitButton from './components/styled/ExitButton.styles.ts'
// Types
import CartItemType from './types/CartItemType';
// API
import fetchProducts from './api/fetchProducts.ts'



const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    fetchProducts,
);
  
  console.log(data);
const getTotalItems = (items: CartItemType[]) => {
    items.reduce((ack: number, item) => ack + item.amount, 0)
};

const handleAddToCart = (clickedItem: CartItemType) => {
  setCartItems(prev => {
    const isItemInCart = prev.find(item => item.id === clickedItem.id)
    if (isItemInCart) {
      return prev.map(item => 
        item.id === clickedItem.id 
        ? {...item, amount: item.amount + 1}
        : item
      );
    }
    return [...prev, {...clickedItem, amount: 1}]
  
    })
  };


 const handleRemoveFromCart = (id: number) => {
  setCartItems(prev => (
    prev.reduce((ack, item) => {
      if(item.id === id) {
        if (item.amount === 1) return ack;
        return [...ack, { ...item, amount: item.amount - 1}]
      } else {
        return [...ack, item]
      }
    }, [] as CartItemType[])
  ))
 };

  if (isLoading) { 
    return <LinearProgress variant="query" color="primary"/> 
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    )
  }
  

    return (
    <Wrapper>
      <Drawer className="cart-container" anchor="right" open={cartOpen} onClose={() => setCartOpen}>
        <ExitButton className="exit-button" onClick={() => setCartOpen(false)}>
          <ExitToApp/>  
        </ExitButton>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
        
      </Drawer>
      <CartButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <ShoppingCart/>
        </Badge>
      </CartButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}


export default App;