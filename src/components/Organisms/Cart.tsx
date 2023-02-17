import { ProductType } from '@/types/product.type';
import { Modal } from '@/components/Molecules';
import styles from './Styles/Cart.module.css';
import type { Component } from 'solid-js';

const Cart: Component<{
  setShowCart: (show: boolean) => void;
  cart: ProductType[];
}> = (props) => {
  return (
    <Modal onClick={() => props.setShowCart(false)}>
      <section class={styles.cart}>
        {!props.cart.length && (
          <button onClick={() => props.setShowCart(false)}>
            No items (yet!)
          </button>
        )}
        {props.cart.length && (
          <>
            <ul></ul>
            <div>
              <span>Total Amount</span>
              <span>500 $</span>
            </div>
            <button>Order</button>
          </>
        )}
      </section>
    </Modal>
  );
};
export default Cart;
