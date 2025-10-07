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
    <>
      <div className="list">
        {sortedItems.length > 0 && (
          <ul>
            {sortedItems.map((item) => (
              <PackItem item={item} key={item.id} />
            ))}
          </ul>
        )}
        <div className="actions">
          <select
            value={sortBy}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              setSortBy(event.target.value as SortType)
            }
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by input description</option>
            <option value="packed">Sort by packed status</option>
          </select>

          <button
            onClick={(): void => {
              clearList();
            }}
          >
            Clear list
          </button>
        </div>
      </div>
    </>
  );
}

type PackItemProps = {
  item: Item;
};

export function PackItem({ item }: PackItemProps): React.JSX.Element {
  const { updateItem, deleteItem } = useItem();
  return (
    <li>
      <input
        type="checkbox"
        checked={item.isPacked}
        onChange={(): void => {
          updateItem(item.id);
        }}
      />
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={(): void => deleteItem(item.id)}>❌</button>
    </li>
  );
}
