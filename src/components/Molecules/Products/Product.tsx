import type { ProductType } from '@/types/product.type';
import styles from './Styles/Product.module.css';
import { Component } from 'solid-js';

const Product: Component<{ product: ProductType }> = (props) => (
  <div class={styles.container}>
    <div class={styles.image}>
      <img
        src={`/images/${props.product.name}.png`}
        alt={props.product.description}
        title={props.product.description}
      />
    </div>
    <p>{props.product.description}</p>
    <p>{props.product.price} $</p>
    <button>Add to cart</button>
  </div>
);

export default Product;
