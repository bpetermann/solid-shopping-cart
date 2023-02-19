/* @refresh reload */
import { I18nContext, createI18nContext } from '@solid-primitives/i18n';
import { CartProvider } from '@/store/cart-context';
import { render } from 'solid-js/web';
import { dict } from './lib/dict';
import App from './App';
import './index.css';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}

const value = createI18nContext(dict, 'en');

render(
  () => (
    <I18nContext.Provider value={value}>
      <CartProvider>
        <App />
      </CartProvider>
    </I18nContext.Provider>
  ),
  root!
);
