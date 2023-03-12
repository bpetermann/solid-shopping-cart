export const getStoreArray = (store: string): string[] => {
  const storage = localStorage.getItem(store);
  return storage ? storage.split(', ') : [];
};

export const updateStore = (store: string, items: string[], item?: string) => {
  if (!item) {
    localStorage.setItem(store, items.join(', '));
  } else {
    localStorage.setItem(
      store,
      items.join(', ').concat(items.length ? `, ${item}` : `${item}`)
    );
  }
};

export const removeStore = (store: string) => {
  localStorage.removeItem(store);
};
