import { Modal, CartModalProduct } from '@/components/Molecules';
import { ProductType } from '@/types/product.type';
import styles from './Styles/Cart.module.css';
import { Component, For } from 'solid-js';
import { useCart } from '@/store/cart-context';

const Cart: Component<{
  setShowCart: (show: boolean) => void;
}> = (props) => {
  const [cart, { cartLength, totalPrice }] = useCart()!;

  return (
    <Modal onClick={() => props.setShowCart(false)}>
      <section class={styles.cart}>
        {!cartLength() && (
          <button onClick={() => props.setShowCart(false)}>
            No items (yet!)
          </button>
        )}
        {cartLength() && (
          <>
            <ul>
              <For each={cart()}>
                {(item) => <CartModalProduct item={item} />}
              </For>
            </ul>
            <div>
              <span>Total Amount</span>
              <span>{totalPrice()} $</span>
            </div>
            <button>Order</button>
          </>
        )}
      </section>
    </Modal>
  );
};
export default Cart;
