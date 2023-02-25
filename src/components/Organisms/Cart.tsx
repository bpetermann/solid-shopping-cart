import { Modal, CartModalProduct } from '@/components/Molecules';
import { useI18n } from '@solid-primitives/i18n';
import { useCart } from '@/store/cart-context';
import styles from './Styles/Cart.module.css';
import { Close } from '@/components/Atoms';
import { Component, For } from 'solid-js';

const Cart: Component<{
  setShowCart: (show: boolean) => void;
}> = (props) => {
  const [cart, { cartLength, totalPrice }] = useCart()!;
  const [t] = useI18n();

  return (
    <Modal onClick={() => props.setShowCart(false)}>
      <div class={styles.cart}>
        {!cartLength() && (
          <button onClick={() => props.setShowCart(false)}>
            {t('No items')}
          </button>
        )}
        {cartLength() && (
          <>
            <div class={styles.close}>
              <Close
                onClick={() => props.setShowCart(false)}
                classname='dark'
              />
            </div>
            <h3>{t('Cart', { amount: cartLength().toString() })}</h3>
            <ul>
              <For each={cart()}>
                {(item) => <CartModalProduct item={item} />}
              </For>
            </ul>
            <div class={styles.checkout}>
              <span> {t('Total Amount')}</span>
              <span>{totalPrice()} $</span>
            </div>
            <button>{t('Order')}</button>
          </>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
