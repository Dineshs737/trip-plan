import useItem from "../contexts/itemContext/Item.context";
import type { Item } from "../types/item.type";

export default function Stats() {
  const { items } = useItem();
  // console.log(items.length)
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const totalItem: number = items.length;
  const totalPackedItems: number = items.reduce((prv: number, item: Item) => {
    return item.isPacked ? (prv += 1) : prv;
  }, 0);

  const presantage: number =
    totalItem > 0 ? Math.round((totalPackedItems / totalItem) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        {presantage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 you have ${totalItem}${totalItem > 1 ? "" : "s"} items on your list , and you already packed ${totalItem} (${presantage}%)`}
      </em>
    </footer>
  );
}
