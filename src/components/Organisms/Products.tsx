import { Component, createResource, createSignal, For, Show } from 'solid-js';
import type { ProductType } from '@/types/product.type';
import { useFavorites } from '@/store/favorite-context';
import { Container, Spinner } from '@/components/Atoms';
import styles from './Styles/Products.module.css';
import { Product } from '@/components/Molecules';
import { useCart } from '@/store/cart-context';

const Products: Component<{
  category: { id: number; name: string };
  value: string;
}> = (props) => {
  const [, { storedFavorites }] = useFavorites()!;
  const [, { storedCart }] = useCart()!;

  const fetchProducts = async () => {
    const res = await fetch(
      `https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems`
    );
    const data = await res.json();
    const items = data.map((i: ProductType) => {
      return { ...i, category: i.category.concat(', Women') };
    });
    setProducts(items);
    storedFavorites(items);
    storedCart(items);
  };

  const [products, setProducts] = createSignal<ProductType[]>();
  const [data] = createResource(fetchProducts);

  const searchProducts = () =>
    products()?.filter((item) => {
      return (
        item.description.toLowerCase().includes(props.value.toLowerCase()) &&
        item.category.includes(props.category.name)
      );
    });

  return (
    <Container classname='products'>
      <Show when={data.loading}>
        <div class={styles.loading}>
          <Spinner />
        </div>
      </Show>
      <Show when={!!products()?.length}>
        <ul class={styles.products}>
          <For each={searchProducts()}>
            {(product) => (
              <li>
                <Product product={product} />
              </li>
            )}
          </For>
        </ul>
      </Show>
      <Show when={data.error}>
        <p class={styles.error}>Something went wrong!</p>
      </Show>
    </Container>
  );
};

export default Products;
