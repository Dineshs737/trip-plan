import React, { useState } from "react";
import useItem from "../contexts/itemContext/Item.context";
import type { Item } from "../types/item.type";

type SortType = "input" | "description" | "packed";

export default function PackingList() {
  const { clearList, items } = useItem();
  const [sortBy, setSortBy] = useState<SortType>("input");
  let sortedItems: Item[] = [];

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a: Item, b: Item) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a: Item, b: Item) => Number(a.isPacked) - Number(b.isPacked));
  } else {
    sortedItems = items; //sortBy === "input"
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        {sortedItems.length > 0 ? (
          <ul className="space-y-3">
            {sortedItems.map((item) => (
              <PackItem item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center py-8">
            No items added to your packing list yet! 🎒
          </p>
        )}

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
          <select
            value={sortBy}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              setSortBy(event.target.value as SortType)
            }
            className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto"
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>

          <button
            onClick={(): void => {
              clearList();
            }}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600
                     transition-colors duration-200 focus:outline-none focus:ring-2
                     focus:ring-red-500 focus:ring-offset-2 w-full sm:w-auto"
          >
            Clear list
          </button>
        </div>
      </div>
    </div>
  );
}

// Assuming you have a PackItem component, here's how it should be styled:
function PackItem({ item }: { item: Item }) {
  const { updateItem, deleteItem } = useItem();

  return (
    <li
      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100
                   transition-all duration-200 group"
    >
      <input
        type="checkbox"
        checked={item.isPacked}
        onChange={() => updateItem(item.id)}
        className="w-5 h-5 rounded border-gray-300 text-blue-500
                 focus:ring-blue-500 cursor-pointer"
      />
      <span
        className={`flex-1 text-gray-700 ${item.isPacked ? "line-through text-gray-400" : ""}`}
      >
        {item.quantity} × {item.description}
      </span>
      <button
        onClick={() => deleteItem(item.id)}
        className="text-gray-400 hover:text-red-500 transition-colors duration-200
                 opacity-0 group-hover:opacity-100"
      >
        <span className="sr-only">Delete item</span>❌
      </button>
    </li>
  );
}
