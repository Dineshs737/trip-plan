import { useState } from "react";
import Form from "./componenets/Form";
import Logo from "./componenets/Logo";
import PackingList from "./componenets/PackingList";
import Stats from "./componenets/Stats";
import initialItems from "./item";
import type { InitialItemsType } from "./item";

export default function App() {
  const [items, setItems] = useState<InitialItemsType[]>(initialItems);
  // console.log(items)

  const addItem: (item: InitialItemsType) => void = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItem = (id: number): void => {
    setItems((items: InitialItemsType[]) =>
      items.filter((item: InitialItemsType) => item.id !== id),
    );
  };

  const clearList: () => void = () => {
    let confirmed: boolean = false;
    if (items.length > 0)
      confirmed = window.confirm("Are you sure you want to delete all items ?");
    if (confirmed) setItems([]);
  };
  // const updateItem : (id:number  , packed:boolean)=> void = (id ,packed)=>{
  //   setItems((items:InitialItemsType[])=> items.map((item:InitialItemsType)=>{
  //           item.id === id && item.packed  = packed
  //   }))
  // }

  // const updateItem = (id: number, packed: boolean): void => {
  //   setItems((items: InitialItemsType[]) =>
  //     items.map((item: InitialItemsType) =>
  //       item.id === id ? { ...item, packed } : item
  //     )
  //   );
  // };

  const updateItem = (id: number): void => {
    setItems((items: InitialItemsType[]) =>
      items.map((item: InitialItemsType) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItem} />
      <PackingList
        onClearList={clearList}
        items={items}
        onDeleteItems={deleteItem}
        onUpdateItem={updateItem}
      />
      <Stats items={items} />
    </div>
  );
}
