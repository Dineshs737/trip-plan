import {
  createContext,
  useContext,
  useState,
  type SetStateAction,
} from "react";
import { type Item } from "../types/item.type";

interface ItemContexType {
  items: Item[];
  setItems: React.Dispatch<SetStateAction<Item[]>>;
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
  const [items, setItems] = useState<Item[]>([]);
  // console.log(items)

  const addItem: (item: Item) => void = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItem = (id: number): void => {
    setItems((items: Item[]) => items.filter((item: Item) => item.id !== id));
  };

  const clearList: () => void = () => {
    let confirmed: boolean = false;
    if (items.length > 0)
      confirmed = window.confirm("Are you sure you want to delete all items ?");
    if (confirmed) setItems([]);
  };

  const updateItem = (id: number): void => {
    setItems((items: Item[]) =>
      items.map((item: Item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  };

  return (
    <ItemContex.Provider
      value={{
        items: items,
        setItems: setItems,
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
