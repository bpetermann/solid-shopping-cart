import { createSignal, createContext, useContext } from 'solid-js';
import { ProductType } from '@/types/product.type';
import { ParentComponent } from 'solid-js';
import type { Accessor } from 'solid-js';

export type FavoriteStore = [
  Accessor<ProductType[]>,
  {
    favoritesLength: () => number;
    toggleFavorite: (product: ProductType) => void;
  }
];

const FavoritesContext = createContext<FavoriteStore>();

export const FavoritesProvider: ParentComponent<{}> = (props) => {
  const [favorites, setFavorites] = createSignal<ProductType[]>([]);

  const favoritesStore: FavoriteStore = [
    favorites,
    {
      favoritesLength() {
        return favorites().reduce(function (acc, item) {
          return acc + item.amount;
        }, 0);
      },

      toggleFavorite(product: ProductType) {
        const existingFavoriteItem = favorites().find(
          (item) => item.name === product.name
        );

        return !existingFavoriteItem
          ? setFavorites([...favorites(), product])
          : setFavorites(
              favorites().filter((item) => item.name !== product.name)
            );
      },
    },
  ];

  return (
    <FavoritesContext.Provider value={favoritesStore}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  return useContext(FavoritesContext);
}
