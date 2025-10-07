import useItem from "../contexts/itemContext/Item.context";
import type { Item } from "../types/item.type";

export default function Stats() {
  const { items } = useItem();
  if (!items.length)
    return (
      <p className="stats bg-gray-50 text-gray-600 text-center text-lg font-medium py-4 px-6 rounded-md shadow-sm">
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
    <footer className="stats bg-gray-50 text-gray-600 text-center text-lg font-medium py-4 px-6 rounded-md shadow-sm">
      <em>
        {presantage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${totalItem} item${totalItem > 1 ? "s" : ""} on your list, and you already packed ${totalPackedItems} (${presantage}%)`}
      </em>
    </footer>
  );
}
