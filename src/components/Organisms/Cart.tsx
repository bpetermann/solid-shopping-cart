import { Modal, CartModalProduct } from '@/components/Molecules';
import { ProductType } from '@/types/product.type';
import styles from './Styles/Cart.module.css';
import { Component, For } from 'solid-js';

const Cart: Component<{
  removeProduct: (product: ProductType) => void;
  addProduct: (product: ProductType) => void;
  setShowCart: (show: boolean) => void;
  cart: ProductType[];
}> = (props) => {
  const totalPrice = () =>
    props.cart
      .reduce(function (acc, prod) {
        return acc + prod.amount * prod.price;
      }, 0)
      .toFixed(2);

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
            <ul>
              <For each={props.cart}>
                {(item) => (
                  <CartModalProduct
                    removeProduct={props.removeProduct}
                    addProduct={props.addProduct}
                    item={item}
                  />
                )}
              </For>
            </ul>
            <div>
              <span>Total Amount</span>
              <span>{totalPrice} $</span>
            </div>
            <button>Order</button>
          </>
        )}
      </section>
    </Modal>
  );
};
export default Cart;
