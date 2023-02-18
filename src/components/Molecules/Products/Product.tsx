import type { ProductType } from '@/types/product.type';
import styles from './Styles/Product.module.css';
import { AddButton } from '@/components/Atoms';
import { Component } from 'solid-js';
import { useCart } from '@/store/cart-context';

const Product: Component<{
  product: ProductType;
}> = (props) => {
  const [_, { addProduct }] = useCart()!;

  return (
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
      <AddButton onClick={() => addProduct(props.product)} />
    </div>
  );
};

export default Product;
