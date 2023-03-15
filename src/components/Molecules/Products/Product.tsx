import type { ProductType } from '@/types/product.type';
import styles from './Styles/Product.module.css';
import { useCart } from '@/store/cart-context';
import { AddButton } from '@/components/Atoms';
import { Component, createEffect, createSignal } from 'solid-js';
import { useFavorites } from '@/store/favorite-context';

const Product: Component<{
  product: ProductType;
}> = (props) => {
  const [, { addProduct }] = useCart()!;
  const [favorites, { toggleFavorite }] = useFavorites()!;
  const [isFavorite, setIsFavorite] = createSignal<boolean>();

  createEffect(() => {
    setIsFavorite(!!favorites().find((item) => item.id === props.product.id));
  });

  return (
    <div class={styles.container}>
      <div class={styles.image}>
        <img
          src={`/images/products/${props.product.name}.webp`}
          alt={props.product.description}
          title={props.product.description}
        />
        <button
          class={`${styles.favorite} ${isFavorite() && styles.isFavorite}`}
          onClick={() => toggleFavorite(props.product)}
        >
          <img src='/images/favorite.png' alt='favorite' />
        </button>
      </div>
      <p>{props.product.description}</p>
      <p>{props.product.price} $</p>
      <AddButton
        onClick={() => {
          addProduct(props.product);
          isFavorite() && toggleFavorite(props.product);
        }}
      />
    </div>
  );
};

export default Product;
