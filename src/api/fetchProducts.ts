import CartItemType from '../types/CartItemType'

 const fetchProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
  }

  export default fetchProducts;