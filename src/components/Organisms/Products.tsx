import { Component, createResource, createSignal, For, Show } from 'solid-js';
import type { ProductType } from '@/types/product.type';
import { Container, Spinner } from '@/components/Atoms';
import styles from './Styles/Products.module.css';
import { Product } from '@/components/Molecules';

const Products: Component = () => {
  const fetchUser = async () => {
    const res = await fetch(
      `https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems`
    );
    const data = await res.json();
    const items = data.map((i: ProductType) => {
      return { ...i, category: i.category.concat(', Women') };
    });
    setProducts(items);
  };

  const [products, setProducts] = createSignal<ProductType[]>();
  const [data] = createResource(fetchUser);

  return (
    <Container classname='products'>
      <Show when={data.loading}>
        <div class={styles.loading}>
          <Spinner />
        </div>
      </Show>
      <ul class={styles.products}>
        <For each={products()}>
          {(product) => (
            <li>
              <Product product={product} />
            </li>
          )}
        </For>
      </ul>
      <Show when={data.error}>
        <p class={styles.error}>Something went wrong!</p>
      </Show>
    </Container>
  );
};

export default Products;
