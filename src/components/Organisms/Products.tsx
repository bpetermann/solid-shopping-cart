import { Component, createResource, createSignal, For, Show } from 'solid-js';
import type { ProductType } from '@/types/product.type';
import { Container, Spinner } from '@/components/Atoms';
import styles from './Styles/Products.module.css';
import { Product } from '@/components/Molecules';

const Products: Component<{
  addProduct: (product: ProductType) => void;
  value: string;
}> = (props) => {
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

  const searchProducts = () =>
    products()?.filter((item) => {
      return item.description.toLowerCase().includes(props.value.toLowerCase());
    });

  return (
    <Container classname='products'>
      <Show when={data.loading}>
        <div class={styles.loading}>
          <Spinner />
        </div>
      </Show>
      <ul class={styles.products}>
        <For each={searchProducts()}>
          {(product) => (
            <li>
              <Product product={product} addProduct={props.addProduct} />
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
