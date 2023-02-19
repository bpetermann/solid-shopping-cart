import { Modal, CartModalProduct } from '@/components/Molecules';
import { useI18n } from '@solid-primitives/i18n';
import styles from './Styles/Cart.module.css';
import { Component, For } from 'solid-js';
import { useCart } from '@/store/cart-context';

const Cart: Component<{
  setShowCart: (show: boolean) => void;
}> = (props) => {
  const [cart, { cartLength, totalPrice }] = useCart()!;
  const [t] = useI18n();

  return (
    <Modal onClick={() => props.setShowCart(false)}>
      <section class={styles.cart}>
        {!cartLength() && (
          <button onClick={() => props.setShowCart(false)}>
            {t('No items')}
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
              <span> {t('Total Amount')}</span>
              <span>{totalPrice()} $</span>
            </div>
            <button> {t('Order')}</button>
          </>
        )}
      </section>
    </Modal>
  );
};
export default Cart;
