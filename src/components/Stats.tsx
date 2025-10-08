import useItem from "../contexts/itemContext/Item.context";
import type { Item } from "../types/item.type";

export default function Stats() {
  const { items } = useItem();

  if (!items.length)
    return (
      <footer className="w-full bg-gray-100 border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-600 italic">
            Start adding some items to your packing list
          </p>
        </div>
      </footer>
    );

  const totalItem: number = items.length;
  const totalPackedItems: number = items.reduce((prv: number, item: Item) => {
    return item.isPacked ? (prv += 1) : prv;
  }, 0);

  const percentage: number =
    totalItem > 0 ? Math.round((totalPackedItems / totalItem) * 100) : 0;

  return (
    <footer className="w-full bg-inherit border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-700 font-medium">
          {percentage === 100 ? (
            <span className="text-green-600">
              You got everything! Ready to go ✈️
            </span>
          ) : (
            <span>
              💼 You have {totalItem} item{totalItem !== 1 ? "s" : ""} on your
              list, and you already packed {totalPackedItems} ({percentage}%)
            </span>
          )}
        </p>
      </div>
    </footer>
  );
}
