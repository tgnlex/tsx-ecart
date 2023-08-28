import Button from '@mui/material/Button';
//types
import ItemProps from '../types/ItemProps';
//styles
import {Wrapper} from './styled/ItemWrapper.styles.ts'

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => (
    <Wrapper>
      <div>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)} />
    </Wrapper>
);

export default Item;