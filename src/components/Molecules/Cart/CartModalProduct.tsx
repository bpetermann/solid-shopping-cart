import { Hero, Products, Newsletter, Faqs, Cart } from '@/components/Organisms';
import { ProductType } from '@/types/product.type';
import styles from './Styles/CartModalProduct.module.css';
import type { Component } from 'solid-js';

const CartModalProduct: Component<{
  removeProduct: (product: ProductType) => void;
  addProduct: (product: ProductType) => void;
  item: ProductType;
}> = (props) => (
  <li class={styles['cart-item']}>
    <div>
      <h4 class={styles['item-name']}>{props.item.name}</h4>
      <div class={styles['item-sum']}>
        <span>{(props.item.amount * props.item.price).toFixed(2)} $</span>
        <span>{props.item.amount}X</span>
      </div>
    </div>
    <div>
      <button onClick={() => props.addProduct(props.item)} class={styles.add}>+</button>
      <button onClick={() => props.removeProduct(props.item)} class={styles.remove}>-</button>
    </div>
  </li>
);

export default CartModalProduct;
