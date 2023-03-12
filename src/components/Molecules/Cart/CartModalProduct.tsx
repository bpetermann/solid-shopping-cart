import { Hero, Products, Newsletter, Faqs, Cart } from '@/components/Organisms';
import { ProductType } from '@/types/product.type';
import styles from './Styles/CartModalProduct.module.css';
import type { Component } from 'solid-js';
import { useCart } from '@/store/cart-context';

const CartModalProduct: Component<{
  item: ProductType;
}> = (props) => {
  const [, { addProduct, removeProduct }] = useCart()!;

  return (
    <li class={styles['cart-item']}>
      <div>
        <h4 class={styles['item-name']}>{props.item.name}</h4>
        <div class={styles['item-sum']}>
          <span>{(props.item.amount * props.item.price).toFixed(2)} $</span>
          <span>{props.item.amount}X</span>
        </div>
      </div>
      <div>
        <button onClick={() => addProduct(props.item)} class={styles.add}>
          +
        </button>
        <button onClick={() => removeProduct(props.item)} class={styles.remove}>
          -
        </button>
      </div>
    </li>
  );
};

export default CartModalProduct;
