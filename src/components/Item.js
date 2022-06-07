import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState('');

  function handleAddClick(){
    if (isInCart === '') {
      setInCart('in-cart')
    } else {
      setInCart('')
    }
  }

  const cartPrompt = (isInCart === '') ? 'Add to Cart' : 'Remove From Cart';

  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddClick}>{cartPrompt}</button>
    </li>
  );
}

export default Item;
