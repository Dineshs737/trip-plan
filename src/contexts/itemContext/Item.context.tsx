import { createContext, useContext, useReducer } from "react";
import { type Item } from "../../types/item.type";
import { ItemReducer } from "./item.reducer";

interface ItemContexType {
  items: Item[];
  addItem: (item: Item) => void;
  deleteItem: (id: number) => void;
  updateItem: (id: number) => void;
  clearList: () => void;
}

const ItemContex = createContext<ItemContexType | undefined>(undefined);

type ItemProviderType = {
  children: React.ReactNode;
};

export function ItemProvider({ children }: ItemProviderType) {
  const [{ items }, dispatch] = useReducer(ItemReducer, { items: [] });

  const addItem: (item: Item) => void = (item) => {
    dispatch({ type: "item/add", payload: item });
  };

  const deleteItem = (id: number): void => {
    dispatch({ type: "item/delete", payload: id });
  };

  const clearList: () => void = () => {
    dispatch({ type: "item/clearAll" });
  };

  const updateItem = (id: number): void => {
    dispatch({ type: "item/update", payload: id });
  };

  return (
    <ItemContex.Provider
      value={{
        items: items,
        addItem: addItem,
        deleteItem: deleteItem,
        clearList: clearList,
        updateItem: updateItem,
      }}
    >
      {children}
    </ItemContex.Provider>
  );
}

export default function useItem(): ItemContexType {
  const useItemContext = useContext(ItemContex);
  if (!useItemContext)
    throw new Error("Item useItem was using outside ItemProvder");

  return useItemContext;
}
